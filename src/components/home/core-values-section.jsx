import InnovationIcon from "./assets/icons/innovation.jsx"
import TechnologyIcon from "./assets/icons/technology.jsx"
import SustainabilityIcon from "./assets/icons/sustainability.jsx"
import PartnershipIcon from "./assets/icons/partnership.jsx"
import LifestyleIcon from "./assets/icons/lifestyle.jsx"
import ValueChainIcon from "./assets/icons/valuechain.jsx"
import CircularityIcon from "./assets/icons/circularity.jsx"
import Tree from "./assets/Tree.png"
import Cycler from "./assets/Cycler.svg"
import Renewables from "./assets/Renewables.png"

import { m } from "framer-motion"

export default function CoreValuesSection() {
  return (
    <section className="relative bg-green_three rounded-[32px] md:rounded-[64px] lg:rounded-[80px] overflow-clip">
      <div className="px-8 pb-[186px] md:pb-[222px] lg:pb-[209px]">
        <header className="px-16 py-20 space-y-6 text-center ">
          <m.h3
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            viewport={{ once: true }}
            className="text-2xl md:text-[32px] lg:text-[40px] font-semibold text-white font-gen_sans"
          >
            Our core values
          </m.h3>
          <m.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 0.5 } }}
            viewport={{ once: true }}
            className="text-sm font-medium text-white/90 font-inter"
          >
            Our core business values includes the following
          </m.p>
        </header>

        <div className="grid grid-cols-1 gap-8 place-items-center md:grid-cols-2 max-w-[650px] mx-auto">
          <m.img
            initial={{ opacity: 0, x: -100, rotate: 56 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
            src={Tree}
            alt=""
            className="absolute hidden rotate-[56deg] -left-[40%] top-24 lg:flex"
          />

          <Card
            description={
              "Maximizing impact through technology for sustainable growth."
            }
            heading={"Technology"}
            Icon={TechnologyIcon}
          />
          <Card
            description={
              "Championing bold ideas and positive trends to achieve sustainable breakthroughs"
            }
            heading={"Innovation"}
            Icon={InnovationIcon}
          />
          <Card
            description={
              "Unlocking valuable data insights to promote circularity across diverse sectors."
            }
            heading={"Sustainability"}
            Icon={SustainabilityIcon}
          />
          <Card
            description={
              "Fostering collaborations for sustainable socio-economic and environmental impact."
            }
            heading={"Partnership"}
            Icon={PartnershipIcon}
          />
        </div>
      </div>

      <div className="relative w-full h-3">
        <div className="w-3 h-3 rounded-full bg-[#4b7810] m-auto relative" />
        <div className="w-full h-[1px] bg-white absolute top-1/2 -translate-y-1/2 " />
      </div>

      <div className="relative z-20 px-8 ">
        <header className="pt-8 pb-20 space-y-6 text-center max-w-[428px] mx-auto w-full md:px-0 ">
          <m.h3
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            viewport={{ once: true }}
            className="text-2xl md:text-[32px] lg:text-[40px] leading-[130%] font-semibold text-white font-gen_sans"
          >
            Weaving sustainability into the <br /> fabric of society
          </m.h3>
          <m.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { delay: 0.5 } }}
            viewport={{ once: true }}
            className="text-sm font-medium text-white/90 font-inter"
          >
            Our focus is on opening new channels for adoption through
          </m.p>
        </header>

        <div className="grid grid-cols-1 gap-10 lg:gap-8 place-items-start items-center lg:items-start justify-center w-fit  lg:w-[998px] lg:grid-cols-3 mx-auto pb-[227px] lg:pb-[245px]">
          <Card
            description={
              "Promoting sustainable habits among consumers by raising awareness about the environmental impact of their daily choices."
            }
            heading={"Lifestyle"}
            Icon={LifestyleIcon}
          />
          <div className="lg:mt-[59px]">
            <Card
              description={
                "Collaborating with brands to establish and implement sustainable practices across their business processes by identifying and addressing potential sustainability concerns."
              }
              heading={"ValueChain"}
              Icon={ValueChainIcon}
            />
          </div>
          <Card
            description={
              "Enhancing sustainable production and consumption practices that ensure economic prosperity for present and future generations."
            }
            heading={"Circularity"}
            Icon={CircularityIcon}
          />
        </div>
      </div>

      <m.img
        initial={{ opacity: 0, y: 100, x: "-50%" }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        src={Tree}
        alt=""
        className="absolute bottom-0 -translate-x-1/2 left-1/2"
      />

      <m.img
        initial={{ opacity: 0, x: -100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.5, ease: "easeOut" },
        }}
        src={Cycler}
        alt=""
        className="absolute bottom-0 hidden left-28 lg:flex"
      />

      <m.img
        initial={{ scale: 0.2 }}
        whileInView={{
          scale: 1,
          transition: { duration: 0.5, ease: "easeOut" },
        }}
        src={Renewables}
        alt=""
        className="absolute bottom-0 right-0 hidden lg:flex"
      />
    </section>
  )
}

const Card = ({ heading, description, Icon }) => {
  return (
    <m.div
      className="px-4 w-full max-w-[308px] min-h-[288px] md:min-h-[308px] md:w-[308px] pt-8 bg-white border border-[#D9D9D9] rounded-3xl relative overflow-clip"
      initial={{ opacity: 0, scaleZ: 0, scale: 0 }}
      whileInView={{
        opacity: 1,
        scaleZ: 1,
        scale: 1,
        transition: { duration: 0.5 },
      }}
    >
      <div className="grid w-12 h-12 mb-10 place-items-center bg-[#4B7810] ml-auto rounded-full">
        <Icon fill={"#fff"} width={"28"} height={"28"} />
      </div>

      <p className="relative z-20 mb-4 text-lg font-semibold font-gen_sans text-dark_text">
        {heading}
      </p>

      <p className="relative z-20 text-sm font-normal font-inter text-normal_text">
        {description}
      </p>

      <div className="absolute bottom-0 -right-[60px] top-[139px] z-10">
        <Icon fill={"#E4EBDB"} width={"186"} height={"186"} />
      </div>
    </m.div>
  )
}
