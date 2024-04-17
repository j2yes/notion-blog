import Script from "next/script"
import { CONFIG } from "site.config"

const Scripts: React.FC = () => (
  <>
    {CONFIG?.googleAnalytics?.enable === true && (
      <>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${CONFIG.googleAnalytics.config.measurementId}`}
        />
        <Script strategy="lazyOnload" id="ga">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${CONFIG.googleAnalytics.config.measurementId}', {
              page_path: window.location.pathname,
            });`}
        </Script>
      </>
    )}

    {CONFIG?.adsense?.enable === true && (
        <>
          <Script async
                  src={"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + CONFIG.adsense.config.clientId}
                  crossOrigin="anonymous"></Script>
        </>
    )}

  </>
)

export default Scripts
