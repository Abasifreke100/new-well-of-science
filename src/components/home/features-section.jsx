import { Button } from "../ui/button"
import cube from "./assets/cube-2.svg"
import LeftSlider from "./assets/left-slider.svg"
import RightSlider from "./assets/right-slider.svg"
import Tree from "./assets/Tree.svg"
import bag from "./assets/bag.svg"
import { m } from "framer-motion"
import Arrow from "./assets/arrow.svg"
import { Link } from "react-router-dom"

export default function FeaturesSection() {
  return (
    <div className="relative">
      <section className="mb-[5.5rem] md:mb-[7.5rem] w-full">
        <div className="flex flex-col lg:flex-row rounded-[32px] overflow-clip w-full lg:items-center relative">
          {/* left / top */}

          <m.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.5, delay: 0.5 },
            }}
            className="absolute z-30 translate-x-10 md:-translate-x-10 -translate-y-[85%] top-1/2 lg:-rotate-90 left-1/2 lg:-translate-y-1/2"
          >
            <img src={Arrow} alt="" className="w-10 md:w-20 lg:w-24" />
          </m.div>

          <div className="rounded-t-[32px] md:rounded-t-[64px]  lg:rounded-tl-none lg:rounded-r-[80px]  bg-white relative w-full pb-20 h-[25rem] md:h-[45.8125rem] lg:h-[53.25rem] ">
            <m.header
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
              className="w-48 md:w-[21.125rem] py-6 mx-auto text-base md:text-[32px] md:leading-[41.6px] lg:pb-[132px] font-semibold text-center md:pt-12 md:pb-20 text-dark_text font-gen_sans"
            >
              We are redefining the way to do business.
            </m.header>

            <m.img
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.5 },
              }}
              src={LeftSlider}
              alt="left "
              className="w-[369px] sm:w-full h-[225px] flex-shrink-0 md:h-[354px] md:w-[609px] lg:h-[442px] lg:w-[761px] -translate-x-8 md:-translate-x-0 lg:-translate-x-32"
            />

            <img
              src={cube}
              alt="cube"
              className="absolute top-12 -right-20 z-50 w-[185.097px] h-[210.484px] rotate-[15deg] lg:right-20 lg:top-24  "
            />
          </div>

          {/* right / bottom */}

          <div className="rounded-b-[32px] md:rounded-b-[64px]  lg:rounded-tl-none lg:rounded-lr-[80px]  bg-green_three relative w-full pb-9 h-[25rem] md:h-[45.8125rem] lg:h-[53.25rem] ">
            <m.header
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.2 },
              }}
              className="w-48 md:w-[21.125rem] py-6 mx-auto text-base md:text-[32px] md:leading-[41.6px] lg:pb-16 font-semibold text-center md:pt-12 md:pb-20 text-white font-gen_sans"
            >
              We are redefining the way to do business.
            </m.header>

            <m.img
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.5, delay: 0.7 },
              }}
              src={RightSlider}
              alt="right "
              className="h-[280px] sm:w-full w-[368px] md:w-[609px] md:h-[459px] lg:w-[761px] lg:h-[574px] flex-shrink-0 translate-x-8 md:translate-x-0 lg:translate-x-24 sm:ml-auto"
            />

            <img
              src={Tree}
              alt="cube"
              className="absolute -right-9 -bottom-2 w-[234px] h-[202px] "
            />
          </div>
        </div>
      </section>

      <section className="mb-[5.5rem] md:mb-[7.5rem] px-[18px] pt-[33px] flex flex-col lg:flex-row gap-28 lg:gap-36 justify-between container relative overflow-clip">
        <div className=" max-w-[21.375rem] md:max-w-[26.5625rem] lg:max-w-[31.25rem] text-center lg:text-left mx-auto lg:mx-0">
          <m.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            viewport={{ once: true }}
            className="text-2xl font-semibold font-gen_sans text-dark_text md:text-[32px] lg:text-[40px] md:leading-[130%] mb-6"
          >
            How will it work without endangering the environment?
          </m.h2>
          <m.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            viewport={{ once: true }}
            className="text-sm mb-8 font-medium font-inter text-normal_text [text-wrap:balance] lg:text-base "
          >
            The answer to this question was at the core of our business model
            during the development of ShoppersBag - our flagship reusable,
            recyclable and biodegradable alternative to plastic shopping bags.{" "}
          </m.p>

          <Button size={"lg"} variant={"outline"} className={"mx-auto"} asChild>
            <Link to={"/portfolio"}>Learn more</Link>
          </Button>
        </div>

        <>
          <m.img
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0.4, ease: "easeInOut" },
            }}
            viewport={{ once: true }}
            src={bag}
            alt="FeaturesSection"
            className="w-full h-[275px] md:w-[480px] md:mx-auto lg:mx-0 lg:h-[387px]"
          />
        </>
      </section>
      <img
        src={cube}
        alt=""
        className="absolute -left-20 -bottom-52 rotate-[165deg] -z-10"
      />
    </div>
  )
}
