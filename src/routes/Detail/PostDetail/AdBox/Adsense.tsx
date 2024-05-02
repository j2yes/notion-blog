import {CONFIG} from "site.config"
import styled from "@emotion/styled"
import {useEffect, useRef} from "react";
import {useRouter} from "next/router";

declare global {
  interface Window {
    adsbygoogle: any;
  }
}
const Adsense: React.FC = () => {

  const router = useRouter();
  const adsLoaded = useRef(false);

  useEffect(() => {
    const loadAd = () => {
      if (typeof window !== "undefined" && window.adsbygoogle) {
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
        adsLoaded.current = true;
      }
    };

    if (router.query && !adsLoaded.current) {
      setTimeout(loadAd, 0);
    }
  }, [router.query]);

  return (
      <>
        <StyledWrapper id="ads" key={Date.now()}>
          <script async
                  src={"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + CONFIG.adsense.config.clientId}
                  crossOrigin="anonymous"></script>
          <Ins className="adsbygoogle"
               data-ad-client={CONFIG.adsense.config.clientId}
               data-ad-slot={CONFIG.adsense.config.slotId}
               data-ad-format="auto"
               data-full-width-responsive="true"></Ins>
          {/*<script id="adsense-inline">*/}
          {/*  {`(adsbygoogle = window.adsbygoogle || []).push({});`}*/}
          {/*</script>*/}
        </StyledWrapper>
      </>
  )
}

export default Adsense

const StyledWrapper = styled.div`
  align-content: center;
`
const Ins = styled.ins`
  display: block;
`