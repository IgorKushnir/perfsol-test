import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="keywords"
            content="Perfsol, web and mobile, technology, App , React, perfect solution, business thrive"
          />
          <link
            rel="apple-touch-icon"
            sizes="18x18"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/img/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/img/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="google-site-verification"
            content="q3XbrfD4N-Po7uOfwrvj1mgeZdRrlCx4BWDSOJKeU_U"
          />
          {/* <link rel="preconnect" href={'https://widget.clutch.co'} />
                    <link rel="preconnect" href={'https://www.googletagmanager.com'} />
                    <link rel="preconnect" href={'https://www.google-analytics.com'} />
                    <link rel="preconnect" href={'https://js.hs-analytics.net'} />
                    <link rel="preconnect" href={'https://js.hs-banner.com'} /> */}
        </Head>
        <body>
          {/* {process.env.NODE_ENV === 'production' && (
                        <noscript>
                            <iframe
                                src="https://www.googletagmanager.com/ns.html?id=GTM-PG8VWV7"
                                height="0"
                                width="0"
                                style={{ display: 'none', visibility: 'hidden' }}
                            ></iframe>
                        </noscript>
                    )} */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
