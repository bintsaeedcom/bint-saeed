import type { NextPageContext } from 'next'

type ErrorPageProps = {
  statusCode?: number
}

/**
 * Pages Router error boundary used by Next’s internal `renderError` when the
 * dev server needs a concrete `/_error` module. Keep this dependency-light
 * so it can render even when the App Router or build is in a bad state.
 */
function PagesError({ statusCode }: ErrorPageProps) {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui, sans-serif',
        padding: '1.5rem',
        textAlign: 'center',
        background: '#f7f4f0',
        color: '#2a1e18',
      }}
    >
      <p style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
        Bint Saeed
      </p>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '0 0 0.5rem' }}>Something went wrong</h1>
      <p style={{ fontSize: '0.9rem', opacity: 0.8, maxWidth: '24rem' }}>
        {statusCode
          ? `The server returned ${statusCode}. Please refresh or try again.`
          : 'An error occurred. Please refresh the page.'}
      </p>
    </div>
  )
}

PagesError.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err && 'statusCode' in err ? (err as { statusCode?: number }).statusCode : 404
  return { statusCode }
}

export default PagesError
