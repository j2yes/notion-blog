import {CONFIG} from "site.config"
import dynamic from "next/dynamic"

const AdsenseComponent = dynamic(
    () => {
      return import("./Adsense")
    },
    {ssr: false}
)

const AdBox: React.FC = () => {
  return (
      <div>
        {CONFIG.adsense.enable && <AdsenseComponent/>}
      </div>
  )
}

export default AdBox
