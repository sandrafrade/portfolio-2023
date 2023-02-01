import {Html, Head, Main, NextScript} from 'next/document'
import Script from 'next/script'

export default function Document () {
    return (
        <Html lang="en">
            <Head>
                <link rel="dns-prefetch" href={process.env.NEXT_PUBLIC_HOST} />
                <link rel="preconnect" href={process.env.NEXT_PUBLIC_HOST} />
                <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="msapplication-TileColor" content="#131313" />
                <meta name="msapplication-TileImage" content="/favicons/ms-icon-144x144.png" />
                <meta name="theme-color" content="#131313" />
            </Head>
            <body>
                <Main />
                <NextScript />
                <Script id="matomo" strategy="beforeInteractive">{`
                    var _paq = window._paq = window._paq || []

                    /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
                    _paq.push( [ 'trackPageView' ] )
                    _paq.push( [ 'enableLinkTracking' ] );
                    
                    (function () {
                        var u = "https://sandrafrade.matomo.cloud/"
                        _paq.push( [ 'setTrackerUrl', u + 'matomo.php' ] )
                        _paq.push( [ 'setSiteId', '1' ] )
                        var d = document, g = d.createElement( 'script' ), s = d.getElementsByTagName( 'script' )[ 0 ]
                        g.async = true; g.src = '//cdn.matomo.cloud/sandrafrade.matomo.cloud/matomo.js'; s.parentNode.insertBefore( g, s )
                    })();
                `}</Script>
            </body>
        </Html>
    )
}
