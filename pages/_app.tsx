import type { AppProps } from 'next/app'

/**
 * Minimal Pages Router shell. The app uses `app/` for all routes; this file
 * exists so Next can always resolve `/_error` when the dev error path falls
 * back to the Pages runtime (avoids "missing required error components").
 */
export default function PagesApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
