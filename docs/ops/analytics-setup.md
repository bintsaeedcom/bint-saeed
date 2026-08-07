# Analytics Setup (Consent-Gated)

This project uses a privacy-aware analytics layer that only tracks after user consent.

## Required Environment Variables

- `NEXT_PUBLIC_GA4_MEASUREMENT_ID`: enables Google Analytics 4.
- `NEXT_PUBLIC_CLARITY_PROJECT_ID`: enables Microsoft Clarity.
- `NEXT_PUBLIC_POSTHOG_KEY` + `NEXT_PUBLIC_POSTHOG_HOST`: enables PostHog (both required).
- `NEXT_PUBLIC_META_PIXEL_ID`: enables Meta Pixel (marketing consent only).
- `NEXT_PUBLIC_SNAP_PIXEL_ID`: enables Snap Pixel (marketing consent only).

If an ID/key is missing, that tracker is not initialized.

## Tracker Roles

- **GA4**: page views, ecommerce funnel events, CTA and navigation events.
- **Clarity**: behavioral analytics (heatmaps/session behavior) after consent.
- **PostHog (optional)**: autocapture + custom event pipeline, with masking defaults.
- **Meta Pixel**: catalog / Instagram Shopping events after marketing consent (+ optional CAPI).
- **Snap Pixel**: Snapchat web events after marketing consent (CAPI when token is added).

## Consent and Privacy Notes

- Consent source: `localStorage` keys `analyticsConsent`, `marketingConsent`, `cookieConsent`.
- No non-essential tracker initializes before analytics consent.
- Consent updates are propagated through `bs-consent-changed` and `storage` listeners.
- Sensitive data capture is intentionally restricted: no payment fields, no direct checkout form values, and no typed personalization message contents are sent by custom analytics events.

## Key Implementation Files

- Analytics bootstrap: `components/AnalyticsBootstrap.tsx`
- Consent utilities: `lib/analytics/consent.ts`
- Tracking utility layer: `lib/analytics/tracking.ts`
- Tracker legal catalog: `lib/analytics/trackerCatalog.ts`
- Cookie banner integration: `components/CookieConsent.tsx`
- Policy pages: `app/privacy-policy/page.tsx`, `app/cookie-policy/page.tsx`
