import {CONFIG} from "site.config"
import styled from "@emotion/styled"

const Adsense: React.FC = () => {

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
          <script id="adsense-inline">
            {`(adsbygoogle = window.adsbygoogle || []).push({});`}
          </script>
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