import Layout from "../components/layout"
import PartnersForm from "../components/partnership/partners-form"
import Ellipse from "../components/partnership/assets/ellipse.png"
import Partners from "../components/partnership/assets/partners.png"

export default function PartnerShipFormPage() {
  return (
    <Layout>
      <div className="overflow-clip h-[1305px] relative md:h-[1283px] lg:h-[1065px]">
        <img
          src={Ellipse}
          className="absolute top-0 left-0 w-full h-[769px] max-w-[939px]"
        />

        <img
          src={Partners}
          alt=""
          className="absolute top-20 -right-24 w-[500px] h-[500px] rounded-[66px]"
        />
        <PartnersForm />
      </div>
    </Layout>
  )
}
