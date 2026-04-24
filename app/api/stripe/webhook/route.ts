import { POST as webhookPost } from '@/app/api/webhooks/stripe/route'

export const runtime = 'nodejs'
export const POST = webhookPost
