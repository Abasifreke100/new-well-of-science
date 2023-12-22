import { Button } from "../ui/button"
import Cube from "./assets/cube.svg"
import Sign from "./assets/sign.png"
import { m } from "framer-motion"

export default function LimitsSection() {
  return (
    <section className="px-4 md:px-7 lg:px-14 my-[88px] md:my-[120px] py-0 md:py-16 ">
      <div className="bg-[#C9507A] px-8 py-14 relative flex flex-col items-center md:items-start justify-center rounded-[48px] md:rounded-[64px] lg:rounded-[80px] md:px-14 lg:px-24 h-[378px] md:h-[480px] text-center md:text-left shadow-2xl overflow-clip">
        <h4 className="font-gen_sans font-semibold text-white text-[40px] md:text-6xl w-64 md:w-[421px] leading-[130%] mb-4">
          Go Beyond The Limits!{" "}
        </h4>

        <p className="text-sm font-medium font-gen_sans text-[#e6e6e6] lg:text-base mb-8 w-48 md:w-[300px] lg:w-[421px]">
          Innovation and sustainability go hand in hand, embracing one drives
          the other.
        </p>

        <Button size={"lg"}>Get in touch</Button>

        <img
          src={Cube}
          alt="cube"
          className="absolute -bottom-20 -right-16 md:right-36 opacity-50 md:bottom-20 lg:bottom-12 lg:right-96 lg:rotate-0 rotate-[30deg]"
        />

        <m.img
          initial={{ opacity: 0, y: 300 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          src={Sign}
          alt="cube"
          className="absolute z-20 -bottom-20 -right-16 md:-right-32 md:bottom-0 lg:bottom-0 lg:right-20"
        />

        <div className="bg-[#D15982] h-[25rem] w-[650px] -rotate-90 rounded-r-full absolute md:-right-72 lg:-right-16 top-[60%]" />
      </div>
    </section>
  )
}
