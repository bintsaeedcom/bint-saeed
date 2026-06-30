import type { NextPageContext } from 'next'
import type { CSSProperties } from 'react'
import Head from 'next/head'

type ErrorPageProps = {
  statusCode?: number
}

const navBtnStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '8.75rem',
  padding: '0.625rem 1.25rem',
  border: '1px solid rgba(59,0,20,0.28)',
  background: 'rgba(255,255,255,0.6)',
  color: '#3b0014',
  fontSize: '9px',
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  textDecoration: 'none',
}

/**
 * Pages Router fallback — matches App Router error shell when the app router is unavailable.
 */
function PagesError({ statusCode }: ErrorPageProps) {
  const is404 = statusCode === 404
  const title = is404 ? 'Page Not Found' : 'Something Went Wrong'
  const description = is404
    ? 'The page you are looking for may have moved or no longer exists.'
    : statusCode
      ? `We could not complete your request (${statusCode}). Please refresh or return home.`
      : 'An unexpected error occurred. Please refresh the page or return home.'

  return (
    <>
      <Head>
        <title>{title} | Bint Saeed</title>
        <meta name="robots" content="noindex" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&family=Rozha+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div
        style={{
          minHeight: '100vh',
          margin: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem 1.25rem',
          background: '#faf8f6',
          backgroundImage:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(193,144,134,0.12), transparent 55%)',
          fontFamily: 'Montserrat, system-ui, sans-serif',
          color: '#3b0014',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '26rem',
            textAlign: 'center',
            border: '1px solid rgba(193,144,134,0.25)',
            borderRadius: '2px',
            background: '#faf8f6',
            boxShadow: '0 24px 56px -20px rgba(59,0,20,0.16)',
            padding: '2.5rem 2rem 2.25rem',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '1px',
              background: 'linear-gradient(to bottom, transparent, rgba(193,144,134,0.55), transparent)',
            }}
          />
          <a href="/home" style={{ display: 'inline-block' }}>
            <img
              src="/gold logo.png"
              alt="Bint Saeed"
              width={120}
              height={120}
              style={{ display: 'block', margin: '0 auto', height: '3.75rem', width: 'auto' }}
            />
          </a>

          <p
            style={{
              margin: '1.75rem 0 0',
              fontSize: '10px',
              letterSpacing: '0.38em',
              textTransform: 'uppercase',
              color: '#6a8090',
            }}
          >
            Bint Saeed
          </p>

          {is404 ? (
            <div style={{ marginTop: '1.25rem' }}>
              <p
                style={{
                  margin: 0,
                  fontFamily: '"Rozha One", serif',
                  fontSize: '3.75rem',
                  lineHeight: 1,
                  color: 'rgba(193,144,134,0.22)',
                }}
              >
                404
              </p>
              <h1
                style={{
                  margin: '0.5rem 0 0',
                  fontFamily: '"Rozha One", serif',
                  fontSize: '1.75rem',
                  fontWeight: 400,
                  color: '#3b0014',
                }}
              >
                {title}
              </h1>
            </div>
          ) : (
            <h1
              style={{
                margin: '1.25rem 0 0',
                fontFamily: '"Rozha One", serif',
                fontSize: '1.85rem',
                fontWeight: 400,
                color: '#3b0014',
              }}
            >
              {title}
            </h1>
          )}

          <p
            style={{
              margin: '1rem auto 0',
              maxWidth: is404 ? 'none' : '21rem',
              padding: is404 ? '0 0.25rem' : undefined,
              fontSize: '12px',
              fontWeight: 300,
              lineHeight: 1.65,
              letterSpacing: '0.01em',
              color: is404 ? 'rgba(193, 144, 134, 0.8)' : '#525252',
              whiteSpace: is404 ? 'nowrap' : undefined,
            }}
          >
            {description}
          </p>

          <div
            style={{
              marginTop: '1.75rem',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.625rem',
              justifyContent: 'center',
            }}
          >
            <a href="/home" style={navBtnStyle}>
              Home
            </a>
            <a href="/shop" style={navBtnStyle}>
              Collection
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

PagesError.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res
    ? res.statusCode
    : err && 'statusCode' in err
      ? (err as { statusCode?: number }).statusCode
      : 404
  return { statusCode }
}

export default PagesError
