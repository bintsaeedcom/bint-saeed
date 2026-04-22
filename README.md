# Bint Saeed - Luxury Fashion E-Commerce

A premium luxury fashion webshop built with Next.js, featuring elegant design, smooth animations, and full e-commerce functionality.

## Features

### Design & Experience
- 🎨 Glassmorphic design with parallax scrolling
- ✨ Animated custom cursor
- 🌊 Smooth fade in/out text animations on scroll
- 📱 Fully responsive design
- 🎭 Modern 2025/2026 design trends

### E-Commerce
- 🛒 Full shopping cart functionality
- 💳 Stripe checkout integration
- 📦 Order management system
- 🏷️ Product variants (size, color, custom length)
- 📝 Custom notes for orders

### Pages
- 🏠 Home with hero and endless parallax sections
- 🛍️ Shop with category filtering
- 📄 Product detail with image gallery and swiper
- 🛒 Cart with quantity management
- ℹ️ About Us
- 📜 Privacy Policy (UAE compliant)
- 🍪 Cookie Policy (GDPR compliant)
- 📋 Terms & Conditions

### Integrations
- 📧 Newsletter subscribe (Slack + Mailerlite)
- 📊 Google Analytics ready
- 🔔 Slack notifications for orders
- 💳 Stripe payments

## Brand Colors

- Dark Red: `#3b0014`
- Wild Rose: `#6620a2`
- Dusty Blue: `#92aac1`
- Clay Red: `#8e4233`
- Stone: `#d4bdac`
- Rose: `#c19086`

## Fonts

- **Rozha One** - Headers and brand name
- **Montserrat** - Body text with wide letter-spacing

## Getting Started

### Installation

```bash
npm install
```

### Environment Setup

Copy `.env.example` to `.env.local` and fill in your credentials:

```bash
cp .env.example .env.local
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── about/           # About page
│   ├── api/             # API routes
│   │   ├── checkout/    # Stripe checkout
│   │   ├── orders/      # Order management
│   │   └── subscribe/   # Newsletter signup
│   ├── cart/            # Shopping cart
│   ├── checkout/        # Checkout success
│   ├── cookie-policy/   # Cookie policy
│   ├── privacy-policy/  # Privacy policy
│   ├── shop/            # Shop & product pages
│   ├── terms/           # Terms & conditions
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Homepage
├── components/          # Reusable components
├── data/                # Product data
└── store/               # Zustand cart store
```

## Integrations Setup

### Stripe
1. Create account at [stripe.com](https://stripe.com)
2. Get API keys from Dashboard
3. Add the following to `.env.local`:
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_SECRET_KEY`
   - `STRIPE_WEBHOOK_SECRET`
4. Create webhook endpoint: `/api/webhooks/stripe` and enable `checkout.session.completed`

### Slack
1. Create Slack app at [api.slack.com](https://api.slack.com)
2. Add Incoming Webhook
3. Add webhook URL to `.env.local`

### Mailerlite
1. Create account at [mailerlite.com](https://mailerlite.com)
2. Get API key and group ID
3. Add to `.env.local`

### Google Analytics
1. Create GA4 property
2. Add `NEXT_PUBLIC_GA4_MEASUREMENT_ID` to `.env.local`

### Privacy-Aware Analytics Stack
- Optional trackers supported: GA4, Microsoft Clarity, PostHog.
- All trackers are consent-gated and env-driven.
- Setup guide: `docs/ops/analytics-setup.md`
- Supported env vars:
  - `NEXT_PUBLIC_GA4_MEASUREMENT_ID`
  - `NEXT_PUBLIC_CLARITY_PROJECT_ID`
  - `NEXT_PUBLIC_POSTHOG_KEY`
  - `NEXT_PUBLIC_POSTHOG_HOST`

## Contact

- General: contact@bintsaeed.com
- Legal: legal@bintsaeed.com

## License

© 2026 Bint Saeed. All rights reserved.
