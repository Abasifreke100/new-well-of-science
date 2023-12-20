import imageSmall from "./assets/hero-small.png"
import imageMedium from "./assets/hero-medium.png"
import imageLarge from "./assets/hero-large.png"
import cube from "./assets/cube.svg"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"
export default function HeroSection() {
  return (
    <section className="relative px-4 md:px-[2.375rem] py-28 md:py-32 lg:pt-[193px] lg:pb-[108px] lg:pr-8 lg:pl-14 h-[38.6875rem] lg:h-[35.5rem] overflow-clip">
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

      <img
        src={cube}
        alt="cube"
        className="absolute top-0 right-0 z-50 w-[185.097px] h-[210.484px] rotate-[15deg] "
      />

      <div className="container relative z-40 flex flex-col w-full gap-8 lg:flex-row-reverse lg:items-center md:gap-6 lg:gap-40">
        <h1 className="text-white font-gen_sans font-semibold text-[2.5rem] md:text-[3.25rem] md:first:leading-[125%] leading-[120%] [text-wrap:balance] max-w-[19.75rem] md:max-w-[33.5625rem] lg:max-w-[37.5rem] ">
          Building <span className="text-green_four">Sustainable </span>
          Solutions For Global Impact
        </h1>

        <div className="flex flex-col w-full gap-10 md:gap-8">
          <p className="font-medium font-inter text-sm lg:text-base md:w-[26.9375rem] lg:w-[22.4375rem] text-[#E0E0E0]">
            Well of Science Limited is a{" "}
            <span className="bg-light_pink">sustainability-driven</span> company
            committed to developing and distributing innovative solutions for
            economic, social and environmental impact.
          </p>

          <Button size={"lg"}>
            <Link to={"/about"}>Learn more about us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
