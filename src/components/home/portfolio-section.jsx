import { useState } from "react"
import ShoppersBagImg from "./assets/shoppersbag.png"
import Mushroom from "./assets/mushroom.png"
import MushRoomLabBg from "./assets/mushroom-bg.webp"
import Cube from "./assets/cube-2.svg"
import Bag from "./assets/bag.png"

import { Button } from "../ui/button"

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="mb-[88px] md:mb-[120px] lg:mb-20 relative">
      <img
        src={Cube}
        alt=""
        className="absolute -left-24 rotate-[56deg] -top-24"
      />

      <header className="pt-4 pb-10 mx-auto mb-10 space-y-6 text-center px-7 md:mb-16">
        <h5 className="text-dark_text font-semibold font-gen_sans text-2xl md:text-[32px] leading-[130%] lg:text-[40px] ">
          Explore our portfolio
        </h5>

        <p className="text-sm font-inter lg:text-base">
          Here are some of the projects we&apos;ve carried out
        </p>
      </header>

      <div className="container px-4 md:px-0">
        {/* toggle */}

        <div className="flex items-center w-full md:w-[530px] mx-auto lg:w-[695px] gap-4 md:gap-6 lg:gap-8 shadow-xl border h-14 md:h-20 lg:h-28 rounded-lg md:rounded-xl lg:rounded-2xl px-5 justify-center mb-8 md:mb-14 lg:mb-10">
          <div
            className={`flex items-center justify-center h-7 sm:h-10  rounded-md py-1 w-full ${
              activeTab == 0
                ? "border-2 border-[#497511] opacity-100"
                : "border border-[#D9D9d9] opacity-30"
            }`}
            onClick={() => setActiveTab(0)}
          >
            <img src={ShoppersBagImg} alt="shoppers-bag" className="h-full" />
          </div>

          <div
            className={`flex items-center h-7 sm:h-10 rounded-md w-full gap-2 ${
              activeTab == 1
                ? "border-2 border-[#497511] opacity-100"
                : "border border-[#D9D9d9] opacity-30"
            }`}
            onClick={() => setActiveTab(1)}
          >
            <img src={Mushroom} alt="mushroom" className="h-full" />
            <p className="text-dark_text text-[13px]  font-gen_sans md:text-2xl font-semibold lg:text-[32px] leading-[125%]">
              Mushroom Lab
            </p>
          </div>
        </div>

        {/* contents */}

        <div className="h-[403px] w-full sm:w-[342px] md:w-[664px] lg:w-[57.6875rem] md:rounded-2xl rounded-3xl mx-auto border border-[#ececec] px-4 py-4 md:px-6 shadow-xl">
          {activeTab === 0 ? <ShoppersBag /> : <MushroomLab />}
        </div>
      </div>
    </section>
  )
}

const ShoppersBag = () => {
  return (
    <div className="flex items-center flex-col bg-[#DDD7D1] justify-center md:items-start h-[371px] rounded-2xl py-[52px] px-8 text-center md:text-left relative overflow-clip">
      <div className="md:w-[351px]">
        <img
          src={ShoppersBagImg}
          alt="shoppers-bag"
          className="block w-[218px] h-8 mb-6"
        />

        <p className="mb-8 text-sm font-normal font-inter lg:text-base text-normal_text">
          ShoppersBag is a reusable, biodegradable, recyclable shopping bag,
          enabled with digital technology that allows shoppers to earn rewards
          on every usage in stores and malls.
        </p>

        <Button size="lg">Learn more</Button>
      </div>

      <img
        src={Bag}
        alt="shoppers bag"
        className="absolute hidden md:flex -right-24 bottom-7 w-[310px] h-[310px] rotate-12 lg:w-[401px] lg:h-[411px] lg:rotate-1 lg:bottom-0 lg:right-0"
      />
    </div>
  )
}

const MushroomLab = () => {
  return (
    <div className="flex items-center flex-col bg-[#DDD7D1] justify-center md:items-start h-[371px] rounded-2xl py-[52px] px-8 text-center md:text-left relative overflow-clip">
      <img
        src={MushRoomLabBg}
        alt=""
        className="absolute inset-0 w-full h-full"
      />

      <div className="md:w-[351px] relative">
        <div className="flex items-center gap-3 mb-6 h-11">
          <img
            src={Mushroom}
            alt="mushroom-lab"
            className="block w-10 h-full"
          />
          <p className="text-2xl font-semibold text-white font-gen_sans text-[32px]">
            Mushroom Lab
          </p>
        </div>

        <p className="mb-8 text-sm font-normal text-gray-100 font-inter lg:text-base">
          Mushroom labs is poised to transform lives through the power of
          mushrooms.
        </p>

        <Button size="lg">Learn more</Button>
      </div>
    </div>
  )
}
