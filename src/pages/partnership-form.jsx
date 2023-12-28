import Layout from "../components/layout"
import PartnersForm from "../components/partnership/partners-form"
import Mobile from "../components/partnership/assets/mobile.png"
import Desktop from "../components/partnership/assets/desktop.png"

export default function PartnerShipFormPage() {
  return (
    <Layout>
      <div className=" min-h-[1305px] relative md:min-h-[1283px] lg:min-h-[1065px]">
        <img
          src={Desktop}
          alt="Responsive Image"
          className="absolute z-20 hidden md:flex -top-10 w-full md:h-[897px] md:-top-32 lg:-top-28 object-cover lg:object-contain lg:-left-60"
        />
        <img
          src={Mobile}
          alt="Responsive Image"
          className="absolute z-20 h-[487px] -top-5 left-0 w-full md:hidden object-cover"
        />
        <PartnersForm />
      </div>
    </Layout>
  )
}
