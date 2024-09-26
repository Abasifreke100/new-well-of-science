import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <div className="relative  max-w-[1280px]   mx-auto pt-16 ">
      <div className="flex">
        <div className="relative ">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "90%" }}
            className=" max-md:w-[2px] w-[3px] h-[450px] max-md:h-[650px] max-sm:h-[750px] max-ssm:h-[900px] max-sssm:h-[1150px] line rounded-md"
          ></motion.div>
        </div>
        <div className="md:ml-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            viewport={{ once: true }}
            className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-3xl mb-7 font-medium  js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: "300ms" }}
          >
            <span className="text-green_four"> Green Clubs for Schools</span> are environmental clubs
            established in secondary and tertiary institutions, designed to
            inspire and equip young minds with the tools to become the next
            generation of environmental leaders. Currently piloting in 10
            tertiary institutions and 70 secondary schools across Akwa Ibom and
            Rivers States, we are committed to creating a network of
            eco-conscious students ready to make a difference.
          </motion.p>
          <div className=" my-20">
            <p className="text-[20px] leading-[24px] text-[#7d8590]">
              Our partners
            </p>
            <div className="flex flex-wrap justify-between items-center">
              <Marquee autoFill className="flex ">
                <img
                  src="./images/images_partners/aks.png"
                  alt="akwa-ibom-state-university"
                  className="my-3 h-28 scale-90"
                />
                <img
                  src="./images/images_partners/access-bank.png"
                  alt="access_bank"
                  className="my-3 scale-90 h-16 w-60 "
                />
                <img
                  src="./images/images_partners/ritman-u.png"
                  alt="ritman-university"
                  className="my-3 scale-90 h-28"
                />
                <img
                  src="./images/images_partners/ph.png"
                  alt="university of portharcourt"
                  height="32"
                  className="my-3 scale-90 h-20"
                />
                <img
                  src="./images/images_partners/uniuyo.png"
                  alt="universiy of uyo"
                  height="44"
                  className="my-3 h-32 w-[180px]"
                />
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
