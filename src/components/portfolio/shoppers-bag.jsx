import { Button } from "../ui/button";
// import ShoppersBagImg from "./assets/shoppersbag.png";
import AppleIcon from "./assets/apple-icon";
import AndroidIcon from "./assets/android-icon";
import { ChevronRight } from "lucide-react";
import Phone from "./assets/phone.png";
import Bag from "./assets/bag.png";
import Arrow from "./assets/arrow.svg";
import { m } from "framer-motion";
import { Link } from "react-router-dom";

export default function ShoppersBag() {
  return (
    <section className="md:px-8 lg:px-20 overflow-clip">
      <div className="w-full h-[709px] bg-[#E9E5E2] rounded-b-[100px] absolute top-0 left-0 -z-10" />
      {/* <div className="mb-16 md:mb-[120px]">
        <m.img
          src={ShoppersBagImg}
          alt="shoppers-bag"
          className="h-8 md:h-12 lg:h-16 lg:w-[423px] md:w-[317px] w-[211px] mx-auto block "
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
          viewport={{ once: true }}
        />
      </div> */}

      <m.div
        className="rounded-3xl md:rounded-[64px] lg:rounded-[100px] bg-[#276085] px-4 pt-10 pb-20 md:px-10 md:py-20 lg:pt-20 lg:px-20 lg:pb-40 relative mb-10 md:mb-[148px] lg:mb-20"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.4 },
        }}
      >
        <div className="mb-10 md:mb-16">
          <m.p
            className="text-[#EBEBEB] font-medium leading-[150%] text-xl md:text-2xl lg:text-[32px] font-gen_sans"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.5, delay: 0.5 },
            }}
            viewport={{ once: true }}
          >
            ShoppersBag is a{" "}
            <span className="text-green-400">
              {" "}
              reusable, biodegradable, recyclable{" "}
            </span>{" "}
            shopping bag, enabled with digital technology that allows shoppers
            to earn rewards on every usage in stores and malls. It is made from
            plant-based fiber and thrift denim fabric.{" "}
          </m.p>
        </div>

        <div className="mb-10 md:mb-16">
          <m.p
            className="text-[#EBEBEB] leading-[160%] font-medium font-inter text-sm lg:text-base lg:w-[621px]  first-letter:font-gen_sans first-letter:text-[32px]"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.5, delay: 0.5 },
            }}
            viewport={{ once: true }}
          >
            Our solution enables shoppers, stores and malls, eco-bag producers,
            and brands to drive the reduction in single-use plastic pollution.
            The increased adoption of ShoppersBag by our targeted users
            contributes to the empowerment of women and girls involved in the
            production of ShoppersBag, promotes environmental sustainability,
            and deepens behavioral change towards a circular lifestyle.
            <br /> <br />
            ShoppersBag is tagged with a QR code, which makes its usage
            traceable in stores. This functionality provides users with
            single-use plastic (SUP) reduction metrics that show the number of
            single-use plastics saved from polluting the environment. <br />{" "}
            <br /> At ShoppersBag, we strive to create a community of
            eco-conscious shoppers who actively work towards reducing single-use
            plastic waste pollution in their locality through the{" "}
            <strong>Bring Your Bag to Store (BYBTS) </strong> campaign.
          </m.p>
        </div>

        <m.div
          className="flex flex-col items-center justify-center gap-8 lg:items-start"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, delay: 0.25 },
          }}
          viewport={{ once: true }}
        >
          <p className="text-[#EBEBEB] text-center lg:text-left font-semibold font-gen_sans text-xl leading-[30px] md:text-2xl lg:text-[32px]">
            Get the <span className="text-green-400">ShoppersBag</span> App
            Today.
          </p>

          <div className="flex flex-col gap-6 md:flex-row">
            <Button
              className={
                "rounded-[10px] bg-white px-[14px] py-4 gap-2 text-black text-sm hover:bg-[#17394F] font-medium hover:text-white lg:text-base"
              }
            >
              <AppleIcon /> Get on iPhone
            </Button>
            <Button
              className={
                "rounded-[10px] bg-white px-[14px] py-4 gap-2 text-black text-sm hover:bg-[#17394F] font-medium hover:text-white lg:text-base"
              }
            >
              <AndroidIcon /> Get on Andriod
            </Button>
          </div>

          <Link
            to={"https://shoppersbag.co/"}
            className="flex items-center gap-2 text-sm font-inter text-[#E6E6E6] font-medium lg:text-base underline"
          >
            <span>Learn more about ShoppersBag</span> <ChevronRight />
          </Link>
        </m.div>

        <div>
          <m.img
            src={Phone}
            alt="Phone img"
            className="absolute bottom-0 hidden -right-20 lg:block"
            initial={{ x: 100 }}
            whileInView={{ x: 0, transition: { duration: 0.4 } }}
            viewport={{ once: true }}
          />
          <m.img
            src={Bag}
            alt="Shoppers bag"
            className="absolute bottom-0 hidden lg:block right-[11.5rem]"
            initial={{ x: 200 }}
            whileInView={{ x: 0, transition: { duration: 0.4 } }}
            viewport={{ once: true }}
          />
        </div>
        <img
          src={Arrow}
          alt=""
          className="absolute hidden bottom-80 lg:block right-72 "
        />
      </m.div>
    </section>
  );
}
