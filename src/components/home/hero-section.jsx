import imageSmall from "./assets/hero-small.png"
import imageMedium from "./assets/hero-medium.png"
import imageLarge from "./assets/hero-large.png"
import cube from "./assets/cube.svg"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"

import { m } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="relative mb-[5.5rem] md:mb-[7.5rem] px-4 md:px-[2.375rem] py-28 md:py-32 lg:pt-[193px] lg:pb-[108px] lg:pr-8 lg:pl-14 h-[38.6875rem] lg:h-[35.5rem] overflow-clip">
      <div className="absolute inset-0 z-30 w-full h-full hero-gradient" />
      <img
        srcSet={`${imageSmall} 300w,
      ${imageMedium} 600w,
      ${imageLarge} 1200w`}
        sizes="(max-width: 600px) 100vw,
    (max-width: 1200px) 100vw,
    100vw"
        src={imageMedium}
        alt="Responsive Image"
        className="absolute inset-0 z-20 w-full h-full"
      />

      <m.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.2 } }}
        src={cube}
        alt="cube"
        className="absolute top-0 right-0 z-50 w-[185.097px] h-[210.484px] rotate-[15deg] "
      />

      <div className="container relative z-40 flex flex-col-reverse w-full gap-8 lg:flex-row lg:items-center md:gap-6 lg:gap-[15rem] lg:pt-20">
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          className="flex flex-col lg:justify-between md:max-w-[26.9375rem] lg:max-w-[22.4375rem]"
        >
          <p className="font-medium font-inter text-sm lg:text-base  text-[#E0E0E0] mb-10 md:mb-8">
            Well of Science Limited is a{" "}
            <span className="bg-light_pink">sustainability-driven</span> company
            committed to developing and distributing innovative solutions for
            economic, social and environmental impact.
          </p>

          <Button size={"lg"}>
            <Link to={"/about"}>Learn more about us</Link>
          </Button>
        </m.div>

        <m.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
          }}
          className="text-white font-gen_sans font-semibold text-[2.5rem] md:text-[3.25rem] md:first:leading-[125%] leading-[120%] [text-wrap:balance] max-w-[19.75rem] md:max-w-[33.5625rem] lg:max-w-[37.5rem] "
        >
          Building <br /> <span className="text-[#6FA22D]">Sustainable </span>
          Solutions For Global Impact
        </m.h1>
      </div>
    </section>
  )
}
