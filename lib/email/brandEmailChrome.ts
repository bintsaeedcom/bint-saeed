/**
 * Shared HTML chrome for transactional emails (Resend).
 * Visual system mirrors the webshop: sovereign burgundy, signature wine,
 * dusty-blue accent, stone ground, page canvas — editorial luxury, email-safe.
 */

export const EMAIL_BRAND = {
  /** Site --color-sovereign / brand-darkRed */
  ink: '#1a0210',
  /** Site --color-signature / wild rose */
  signature: '#6f1524',
  /** Soft outer wash (between stone + canvas) */
  canvas: '#f3eee8',
  /** Site --color-light / page canvas */
  card: '#faf8f5',
  /** Site --color-ground */
  stone: '#e8ddd4',
  border: '#e4d9cf',
  /** Site --color-muted */
  muted: '#8a7a70',
  /** Warm body copy */
  body: '#4a3a36',
  /** Site --color-balance / dusty blue */
  accent: '#6a8090',
  /** Site --color-on-dark */
  onDark: '#e8d8c8',
  ctaText: '#faf8f5',
  white: '#ffffff',
} as const

const FONT_SERIF = "Georgia,'Times New Roman',serif"
const FONT_SANS = "'Montserrat',Helvetica,Arial,sans-serif"

export function escapeEmailHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/** Absolute PNG logo URL — Gmail/Outlook do not reliably render SVG. */
export function emailLogoUrl(origin: string): string {
  return `${origin.replace(/\/$/, '')}/gold%20logo.png`
}

type ShellOpts = {
  origin: string
  /** Shown in <title> and as inbox preview when preheader set */
  title: string
  /** Hidden preheader for inbox snippet */
  preheader?: string
  /** Small label under wordmark (e.g. Abu Dhabi) */
  eyebrow?: string
  /** Editorial H1 */
  heading: string
  /** Optional line under H1 (order id, etc.) */
  subheading?: string
  /** Main content HTML (already escaped where needed) */
  bodyHtml: string
  /** Soft note / expiry strip above footer */
  noteHtml?: string
  /** Extra footer line(s) */
  footerHtml?: string
}

/** Dark sovereign header — matches site header energy. */
export function emailBrandHeaderHtml(origin: string, opts?: { eyebrow?: string }): string {
  const { ink, signature, onDark, accent, stone } = EMAIL_BRAND
  const logo = emailLogoUrl(origin)
  const eyebrow = opts?.eyebrow
    ? `<p style="margin:12px 0 0;font-size:9px;letter-spacing:0.34em;text-transform:uppercase;color:${accent};font-family:${FONT_SANS};">
        ${escapeEmailHtml(opts.eyebrow)}
      </p>`
    : ''

  return `
          <tr>
            <td style="background:${ink};background-image:linear-gradient(180deg,${ink} 0%,#230814 100%);padding:0;text-align:center;">
              <!--[if mso]><table role="presentation" width="100%"><tr><td style="background:${ink};"><![endif]-->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="padding:36px 32px 28px;text-align:center;">
                    <a href="${escapeEmailHtml(origin)}" style="text-decoration:none;display:inline-block;" target="_blank" rel="noopener">
                      <img
                        src="${logo}"
                        width="88"
                        height="88"
                        alt="Bint Saeed"
                        style="display:block;margin:0 auto;width:88px;max-width:88px;height:auto;border:0;outline:none;text-decoration:none;"
                      />
                      <p style="margin:16px 0 0;font-size:12px;letter-spacing:0.4em;text-transform:uppercase;color:${onDark};font-family:${FONT_SERIF};line-height:1.2;">
                        BINT SAEED
                      </p>
                    </a>
                    ${eyebrow}
                  </td>
                </tr>
                <tr>
                  <td style="height:2px;line-height:2px;font-size:0;background:linear-gradient(90deg,transparent 0%,${signature} 22%,${stone} 50%,${signature} 78%,transparent 100%);">&nbsp;</td>
                </tr>
              </table>
              <!--[if mso]></td></tr></table><![endif]-->
            </td>
          </tr>`
}

export function emailCtaButtonHtml(href: string, label: string): string {
  const { ink, signature, ctaText } = EMAIL_BRAND
  return `
              <table role="presentation" cellspacing="0" cellpadding="0" style="margin:0 auto;">
                <tr>
                  <td align="center" style="border-radius:1px;background:${ink};background-image:linear-gradient(180deg,${signature} 0%,${ink} 100%);">
                    <!--[if mso]>
                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" href="${escapeEmailHtml(href)}" style="height:48px;v-text-anchor:middle;width:220px;" arcsize="2%" fillcolor="${ink}" stroke="f">
                      <w:anchorlock/>
                      <center style="color:${ctaText};font-family:Helvetica,Arial,sans-serif;font-size:11px;font-weight:500;letter-spacing:2px;">${escapeEmailHtml(label).toUpperCase()}</center>
                    </v:roundrect>
                    <![endif]-->
                    <!--[if !mso]><!-->
                    <a href="${escapeEmailHtml(href)}" target="_blank" rel="noopener"
                      style="display:inline-block;padding:16px 40px;font-size:11px;font-weight:500;letter-spacing:0.22em;text-transform:uppercase;color:${ctaText};text-decoration:none;font-family:${FONT_SANS};line-height:1.2;border:1px solid rgba(232,216,200,0.12);">
                      ${escapeEmailHtml(label)}
                    </a>
                    <!--<![endif]-->
                  </td>
                </tr>
              </table>`
}

export function emailFallbackLinkHtml(url: string): string {
  const { muted, accent, stone, card } = EMAIL_BRAND
  const safeUrl = escapeEmailHtml(url)
  return `
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:28px 0 0;">
                <tr>
                  <td style="padding:16px 18px;background:${stone};border:1px solid ${card};">
                    <p style="margin:0 0 8px;font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:${muted};font-family:${FONT_SANS};">
                      Or open this link
                    </p>
                    <p style="margin:0;font-size:11px;line-height:1.55;word-break:break-all;font-family:${FONT_SANS};">
                      <a href="${safeUrl}" style="color:${accent};text-decoration:none;">${safeUrl}</a>
                    </p>
                  </td>
                </tr>
              </table>`
}

/** Full document shell — use for all customer-facing brand emails. */
export function emailDocumentHtml(opts: ShellOpts): string {
  const { ink, canvas, card, border, muted, body, accent, stone, onDark, signature } = EMAIL_BRAND
  const preheader = opts.preheader
    ? `<div style="display:none;font-size:1px;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;">
        ${escapeEmailHtml(opts.preheader)}
      </div>`
    : ''

  const sub = opts.subheading
    ? `<p style="margin:14px 0 0;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:${muted};font-family:${FONT_SANS};">
        ${opts.subheading}
      </p>`
    : ''

  const note = opts.noteHtml
    ? `<tr>
            <td style="padding:0 36px 28px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="padding:16px 18px;border-top:1px solid ${border};border-bottom:1px solid ${border};font-size:12px;line-height:1.7;color:${muted};text-align:center;font-family:${FONT_SANS};">
                    ${opts.noteHtml}
                  </td>
                </tr>
              </table>
            </td>
          </tr>`
    : ''

  const footerExtra = opts.footerHtml
    ? `<p style="margin:14px 0 0;font-size:11px;line-height:1.7;color:${muted};">${opts.footerHtml}</p>`
    : ''

  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="color-scheme" content="light">
  <meta name="supported-color-schemes" content="light">
  <title>${escapeEmailHtml(opts.title)}</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <style>
    :root { color-scheme: light; supported-color-schemes: light; }
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; }
    img { -ms-interpolation-mode: bicubic; border: 0; outline: none; text-decoration: none; }
    a { color: ${accent}; }
    @media only screen and (max-width: 620px) {
      .bs-email-pad { padding-left: 22px !important; padding-right: 22px !important; }
      .bs-email-shell { width: 100% !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background:${canvas};font-family:${FONT_SERIF};-webkit-font-smoothing:antialiased;">
  ${preheader}
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:${canvas};background-image:radial-gradient(ellipse at top,${stone} 0%,${canvas} 55%);">
    <tr>
      <td align="center" style="padding:40px 16px 48px;">
        <table role="presentation" class="bs-email-shell" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background:${card};border:1px solid ${border};box-shadow:0 18px 48px rgba(26,2,16,0.06);">
${emailBrandHeaderHtml(opts.origin, { eyebrow: opts.eyebrow })}
          <tr>
            <td class="bs-email-pad" style="padding:40px 40px 12px;text-align:center;">
              <p style="margin:0 0 18px;font-size:0;line-height:0;">
                <span style="display:inline-block;width:28px;height:1px;background:${signature};"></span>
              </p>
              <h1 style="margin:0;font-size:30px;line-height:1.18;font-weight:400;letter-spacing:0.01em;color:${ink};font-family:${FONT_SERIF};">
                ${escapeEmailHtml(opts.heading)}
              </h1>
              ${sub}
            </td>
          </tr>
          <tr>
            <td class="bs-email-pad" style="padding:12px 40px 36px;font-size:15px;line-height:1.75;color:${body};font-family:${FONT_SANS};text-align:left;">
              ${opts.bodyHtml}
            </td>
          </tr>
          ${note}
          <tr>
            <td style="background:${ink};padding:28px 32px 32px;text-align:center;">
              <p style="margin:0;font-size:10px;letter-spacing:0.32em;text-transform:uppercase;color:${onDark};font-family:${FONT_SANS};">
                Bint Saeed · Abu Dhabi
              </p>
              <p style="margin:14px 0 0;font-size:11px;line-height:1.7;color:rgba(232,216,200,0.72);font-family:${FONT_SANS};">
                <a href="${escapeEmailHtml(opts.origin)}/shop" style="color:${onDark};text-decoration:none;letter-spacing:0.08em;">Shop</a>
                <span style="color:rgba(232,216,200,0.35);padding:0 10px;">·</span>
                <a href="${escapeEmailHtml(opts.origin)}/account" style="color:${onDark};text-decoration:none;letter-spacing:0.08em;">Account</a>
                <span style="color:rgba(232,216,200,0.35);padding:0 10px;">·</span>
                <a href="${escapeEmailHtml(opts.origin)}/contact" style="color:${onDark};text-decoration:none;letter-spacing:0.08em;">Contact</a>
              </p>
              ${footerExtra}
            </td>
          </tr>
        </table>
        <p style="margin:22px 0 0;font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:${muted};font-family:${FONT_SANS};text-align:center;">
          Crafted with care · United Arab Emirates
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`
}
