import { useSearchParams } from "react-router-dom"
import { m } from "framer-motion"
import ShoppersBagImg from "./assets/shoppersbag.png"
import MushroomImg from "./assets/mushroom.png"

export default function Toggle() {
  let [searchParams, setSearchParams] = useSearchParams()

  const currentTab = parseInt(searchParams.get("tab")) || 0

  return (
    <div className="flex items-center w-full md:w-[530px] mx-auto lg:w-[695px] gap-4 md:gap-6 lg:gap-8 shadow-xl border h-14 lg:h-20 py-3 md:py-4 rounded-lg md:rounded-xl lg:rounded-2xl px-5 justify-center mb-8 md:mb-14 lg:mb-10 bg-white/30">
      <m.div
        className={`flex items-center justify-center h-7 md:h-10  rounded-md py-1 w-full ${
          currentTab === 0
            ? "border-2 border-[#497511] opacity-100 "
            : "border border-[#D9D9d9] opacity-30 cursor-pointer bg-white"
        }`}
        whileHover={{ scale: currentTab === 0 ? 1 : 1.1 }}
        onClick={() => setSearchParams(`?tab=0`)}
      >
        <img
          src={ShoppersBagImg}
          alt="shoppers-bag"
          className="h-full bg-white"
        />
      </m.div>

      <m.div
        className={`flex items-center h-7 md:h-10 rounded-md w-full gap-2 ${
          currentTab === 1
            ? "border-2 border-[#497511] opacity-100 bg-white"
            : "border border-[#D9D9d9] opacity-30 cursor-pointer"
        }`}
        whileHover={{ scale: currentTab === 1 ? 1 : 1.1 }}
        onClick={() => setSearchParams(`?tab=1`)}
      >
        <img src={MushroomImg} alt="mushroom" className="h-full" />
        <p className="text-dark_text text-[11px]  font-gen_sans md:text-2xl font-semibold lg:text-[32px] leading-[125%]">
          Mushroom Lab
        </p>
      </m.div>
    </div>
  )
}
