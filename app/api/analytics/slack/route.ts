import { NextRequest, NextResponse } from 'next/server'

// Slack Webhook URL - Use main webhook or analytics-specific one
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL || process.env.SLACK_ANALYTICS_WEBHOOK_URL

// Store active visitors in memory (in production, use Redis or similar)
const activeVisitors = new Map<string, any>()

export async function POST(request: NextRequest) {
  try {
    const { type, data } = await request.json()

    // Store visitor data
    if (data?.visitorId) {
      activeVisitors.set(data.visitorId, {
        ...data,
        lastSeen: new Date().toISOString(),
      })
    }

    // Format Slack message based on notification type
    let message = formatSlackMessage(type, data)

    // Send to Slack if webhook is configured
    if (SLACK_WEBHOOK_URL) {
      await fetch(SLACK_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(message),
      })
    }

    // Also store notification for the admin dashboard
    await storeNotification(type, data)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Slack notification error:', error)
    return NextResponse.json({ error: 'Failed to send notification' }, { status: 500 })
  }
}

function formatSlackMessage(type: string, data: any) {
  const timestamp = new Date().toLocaleString('en-AE', { timeZone: 'Asia/Dubai' })
  const location = data.location ? `${data.location.city}, ${data.location.country}` : 'Unknown'
  const ip = data.location?.ip || 'Unknown'
  const device = data.device ? `${data.device.type} • ${data.device.browser} • ${data.device.os}` : 'Unknown'
  const timeOnSite = data.totalTimeOnSite ? formatTime(data.totalTimeOnSite) : '0s'

  switch (type) {
    case 'new_visitor':
      return {
        blocks: [
          {
            type: 'header',
            text: { type: 'plain_text', text: '🆕 New Visitor on bintsaeed.com', emoji: true }
          },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*Date & Time:*\n🕐 ${timestamp}` },
              { type: 'mrkdwn', text: `*Location:*\n🌍 ${location}` },
              { type: 'mrkdwn', text: `*IP Address:*\n🔒 ${ip}` },
              { type: 'mrkdwn', text: `*Device:*\n📱 ${device}` },
            ]
          },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*Referrer:*\n🔗 ${data.referrer || 'Direct'}` },
              { type: 'mrkdwn', text: `*Status:*\n✨ First-time visitor` },
            ]
          },
          {
            type: 'context',
            elements: [
              { type: 'mrkdwn', text: `Visitor ID: ${data.visitorId?.slice(-8)}` }
            ]
          }
        ]
      }

    case 'returning_visitor':
      return {
        blocks: [
          {
            type: 'header',
            text: { type: 'plain_text', text: '🔄 Returning Visitor on bintsaeed.com', emoji: true }
          },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*Date & Time:*\n🕐 ${timestamp}` },
              { type: 'mrkdwn', text: `*Location:*\n🌍 ${location}` },
              { type: 'mrkdwn', text: `*IP Address:*\n🔒 ${ip}` },
              { type: 'mrkdwn', text: `*Device:*\n📱 ${device}` },
            ]
          },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*Visit Count:*\n🔢 Visit #${data.visitCount}` },
              { type: 'mrkdwn', text: `*First Visit:*\n📅 ${new Date(data.firstVisit).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}` },
            ]
          },
          {
            type: 'context',
            elements: [
              { type: 'mrkdwn', text: `Visitor ID: ${data.visitorId?.slice(-8)}` }
            ]
          }
        ]
      }

    case 'page_view':
      return {
        blocks: [
          {
            type: 'section',
            text: { 
              type: 'mrkdwn', 
              text: `👁️ *Page View*: ${data.currentPage?.title || data.currentPage?.path}\n_${location} • ${timeOnSite} on site_` 
            }
          }
        ]
      }

    case 'cart_event':
      const cartEmoji = data.cartEvent?.action === 'add' ? '🛒' : data.cartEvent?.action === 'checkout' ? '💳' : '❌'
      const actionText = data.cartEvent?.action === 'add' ? 'Added to Cart' : 
                        data.cartEvent?.action === 'checkout' ? 'Started Checkout' : 'Removed from Cart'
      return {
        blocks: [
          {
            type: 'header',
            text: { type: 'plain_text', text: `${cartEmoji} ${actionText}`, emoji: true }
          },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*Product:*\n${data.cartEvent?.productName}` },
              { type: 'mrkdwn', text: `*Location:*\n${location}` },
              { type: 'mrkdwn', text: `*Time on Site:*\n${timeOnSite}` },
              { type: 'mrkdwn', text: `*Device:*\n${device}` },
            ]
          }
        ]
      }

    case 'contact_captured':
      return {
        blocks: [
          {
            type: 'header',
            text: { type: 'plain_text', text: '📧 Contact Info Captured!', emoji: true }
          },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*Name:*\n${data.contactInfo?.name || 'Not provided'}` },
              { type: 'mrkdwn', text: `*Email:*\n${data.contactInfo?.email || 'Not provided'}` },
              { type: 'mrkdwn', text: `*Phone:*\n${data.contactInfo?.phone || 'Not provided'}` },
              { type: 'mrkdwn', text: `*Location:*\n${location}` },
            ]
          },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*Visit #:*\n${data.visitCount}` },
              { type: 'mrkdwn', text: `*Time on Site:*\n${timeOnSite}` },
              { type: 'mrkdwn', text: `*Pages Viewed:*\n${data.pageViews?.length || 0}` },
              { type: 'mrkdwn', text: `*Cart Items:*\n${data.cartEvents?.filter((e: any) => e.action === 'add').length || 0}` },
            ]
          }
        ]
      }

    case 'checkout_started':
      return {
        blocks: [
          {
            type: 'header',
            text: { type: 'plain_text', text: '💰 Checkout Started!', emoji: true }
          },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*Email:*\n${data.contactInfo?.email || 'Unknown'}` },
              { type: 'mrkdwn', text: `*Location:*\n${location}` },
              { type: 'mrkdwn', text: `*Cart Value:*\n${data.cartValue || 'Unknown'}` },
              { type: 'mrkdwn', text: `*Items:*\n${data.cartItems || 0}` },
            ]
          }
        ]
      }

    case 'order_completed':
      return {
        blocks: [
          {
            type: 'header',
            text: { type: 'plain_text', text: '🎉 NEW ORDER!', emoji: true }
          },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*Order Total:*\n💵 ${data.orderTotal}` },
              { type: 'mrkdwn', text: `*Customer:*\n👤 ${data.customerName}` },
              { type: 'mrkdwn', text: `*Email:*\n📧 ${data.customerEmail}` },
              { type: 'mrkdwn', text: `*Phone:*\n📞 ${data.customerPhone || 'Not provided'}` },
            ]
          },
          {
            type: 'section',
            text: { type: 'mrkdwn', text: `*Items:*\n${data.items?.map((i: any) => `• ${i.name} (${i.quantity}x)`).join('\n') || 'N/A'}` }
          },
          {
            type: 'section',
            fields: [
              { type: 'mrkdwn', text: `*Shipping:*\n🚚 ${data.shippingAddress || 'N/A'}` },
              { type: 'mrkdwn', text: `*Location:*\n🌍 ${location}` },
            ]
          }
        ]
      }

    default:
      return {
        text: `[${type}] ${JSON.stringify(data)}`
      }
  }
}

function formatTime(seconds: number): string {
  if (seconds < 60) return `${seconds}s`
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  if (mins < 60) return `${mins}m ${secs}s`
  const hours = Math.floor(mins / 60)
  return `${hours}h ${mins % 60}m`
}

// Store notification for admin dashboard
async function storeNotification(type: string, data: any) {
  // In production, store in database
  // For now, we'll use the in-memory store
  const notification = {
    id: Date.now().toString(),
    type,
    data,
    timestamp: new Date().toISOString(),
    read: false,
  }

  // Get existing notifications from memory or initialize
  const notifications = (global as any).notifications || []
  notifications.unshift(notification)
  
  // Keep only last 100 notifications
  if (notifications.length > 100) {
    notifications.pop()
  }
  
  (global as any).notifications = notifications
}

// GET endpoint for admin dashboard
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get('type')

  if (type === 'active') {
    // Return active visitors (seen in last 5 minutes)
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString()
    const active = Array.from(activeVisitors.values())
      .filter(v => v.lastSeen > fiveMinutesAgo)
    
    return NextResponse.json({ 
      activeVisitors: active,
      count: active.length 
    })
  }

  if (type === 'notifications') {
    const notifications = (global as any).notifications || []
    return NextResponse.json({ notifications })
  }

  // Return stats
  const allVisitors = Array.from(activeVisitors.values())
  const today = new Date().toDateString()
  const todayVisitors = allVisitors.filter(v => new Date(v.currentVisit).toDateString() === today)
  
  return NextResponse.json({
    totalVisitors: allVisitors.length,
    todayVisitors: todayVisitors.length,
    newVisitors: todayVisitors.filter(v => v.isNewVisitor).length,
    returningVisitors: todayVisitors.filter(v => !v.isNewVisitor).length,
  })
}
