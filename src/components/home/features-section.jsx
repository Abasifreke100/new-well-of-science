import { Button } from "../ui/button"
import cube from "./assets/cube-2.svg"
import LeftSlider from "./assets/left-slider.svg"
import RightSlider from "./assets/right-slider.svg"
import Tree from "./assets/Tree.svg"
import bag from "./assets/bag.svg"

export default function FeaturesSection() {
  return (
    <div className="relative">
      <section className="mb-[5.5rem] md:mb-[7.5rem] w-full">
        <div className="flex flex-col lg:flex-row rounded-[32px] overflow-clip w-full lg:items-center ">
          {/* left / top */}

          <div className="rounded-t-[32px] md:rounded-t-[64px]  lg:rounded-tl-none lg:rounded-r-[80px]  bg-white relative w-full pb-20 h-[25rem] md:h-[45.8125rem] lg:h-[53.25rem] ">
            <header className="w-48 md:w-[21.125rem] py-6 mx-auto text-base md:text-[32px] md:leading-[41.6px] lg:pb-[132px] font-semibold text-center md:pt-12 md:pb-20 text-dark_text font-gen_sans">
              We are redefining the way to do business.
            </header>

            <img
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
            <header className="w-48 md:w-[21.125rem] py-6 mx-auto text-base md:text-[32px] md:leading-[41.6px] lg:pb-16 font-semibold text-center md:pt-12 md:pb-20 text-white font-gen_sans">
              We are redefining the way to do business.
            </header>

            <img
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

      <section className="mb-[5.5rem] md:mb-[7.5rem] px-[18px] pt-[33px] flex flex-col lg:flex-row gap-28 lg:gap-36 justify-between container relative">
        <div className=" max-w-[21.375rem] md:max-w-[26.5625rem] lg:max-w-[31.25rem] text-center lg:text-left mx-auto lg:mx-0">
          <h2 className="text-2xl font-semibold font-gen_sans text-dark_text md:text-[32px] lg:text-[40px] md:leading-[130%] mb-6">
            How will it work without endangering the environment?
          </h2>
          <p className="text-sm mb-8 font-medium font-inter text-normal_text [text-wrap:balance] lg:text-base ">
            The answer to this question was at the core of our business model
            during the development of ShoppersBag - our flagship reusable,
            recyclable and biodegradable alternative to plastic shopping bags.{" "}
          </p>

          <Button size={"lg"} variant={"outline"} className={"mx-auto"}>
            Learn more
          </Button>
        </div>

        <div>
          <img
            src={bag}
            alt="FeaturesSection"
            className="w-full h-[275px] md:w-[480px] lg:h-[387px]"
          />
        </div>
      </section>
      <img
        src={cube}
        alt=""
        className="absolute -left-20 -bottom-52 rotate-[165deg] -z-10"
      />
    </div>
  )
}
