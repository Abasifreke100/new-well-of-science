import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <div className="relative  max-w-[1280px]  lg:pt-32 md:px-10 mx-auto pt-16 ">
      <div className="flex">
        <div className="relative ">
          <div className="mx-auto my-3 ">
            <span className="relative z-[11]">
              <svg
                aria-hidden="true"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                version="1.1"
                width="24"
                data-view-component="true"
                className="text-white"
              >
                <path d="M15.22 4.97a.75.75 0 0 1 1.06 0l6.5 6.5a.75.75 0 0 1 0 1.06l-6.5 6.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L21.19 12l-5.97-5.97a.75.75 0 0 1 0-1.06Zm-6.44 0a.75.75 0 0 1 0 1.06L2.81 12l5.97 5.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.5-6.5a.75.75 0 0 1 0-1.06l6.5-6.5a.75.75 0 0 1 1.06 0Z"></path>
              </svg>
              <span
                className="absolute left-0 top-0 w-6 h-full  home-campaign-glowing-icon-glow "
                style={{
                  backgroundColor: "var(--mktg-accent-primary)",
                  filter: "blur(17px)",
                }}
              ></span>
            </span>
          </div>
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "90%" }}
            style={{
              background:
                "linear-gradient(#d2a8ff, #a371f7 10%, #196c2e 70%, #2ea043 80%, #56d364)",
              marginLeft: "11px",
            }}
            className=" max-md:w-[2px] w-[3px] h-[450px] max-md:h-[650px] max-sm:h-[750px] max-ssm:h-[900px] max-sssm:h-[1150px] line rounded-md"
          ></motion.div>
        </div>
        <div className="  max-md:px-4 ml-4 md:ml-12">
          <h1 className=" relative z-2 max-md:mb-5 text-[48px] text-green_three md:text-[72px] max-sm:leading-[40px] max-md:leading-[46px] lg:text-[60px] font-semibold ">
            {" "}
            Green Clubs for Schools
          </h1>
          <p className="relative z-1 text-[24px] md:text-[28px]  lg:text-[32px] leading-[30px] md:leading-[36px] lg:leading-[44px] mb-5 md:mb-2 md:10/12  lg:w-9/12 text-[#7d8590]">
            Championing Sustainability Across Schools and Campuses in Nigeria
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            viewport={{ once: true }}
            className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-3xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: "300ms" }}
          >
            Join our mission to empower students across Nigeria to take
            meaningful action for the environment. Green Clubs for Schools are
            environmental clubs established in secondary and tertiary
            institutions, designed to inspire and equip young minds with the
            tools to become the next generation of environmental leaders.
            Currently piloting in 10 tertiary institutions and 70 secondary
            schools across Akwa Ibom and Rivers States, we are committed to
            creating a network of eco-conscious students ready to make a
            difference
          </motion.p>
          <div className=" my-20">
            <p className="text-[16px] leading-[24px] text-[#7d8590]">
              Trusted by the world&apos;s leading&nbsp;organizations&nbsp;↘︎
            </p>
            <div className="flex flex-wrap justify-between items-center">
              <Marquee autoFill className="flex ">
                <img
                  src="https://github.githubassets.com/images/modules/site/home-campaign/logos/stripe.svg"
                  alt="Stripe logo"
                  height="44"
                  className="my-3 scale-90"
                />
                <img
                  src="https://github.githubassets.com/images/modules/site/home-campaign/logos/pinterest.svg"
                  alt="Pinterest logo"
                  height="44"
                  className="my-3 scale-90"
                />
                <img
                  src="https://github.githubassets.com/images/modules/site/home-campaign/logos/kpmg.svg"
                  alt="KPMG logo"
                  height="44"
                  className="my-3 scale-90"
                />
                <img
                  src="https://github.githubassets.com/images/modules/site/home-campaign/logos/mercedes.svg"
                  alt="Mercedes-Benz logo"
                  height="44"
                  className="my-3 w-[200px]"
                />
                <img
                  src="https://github.githubassets.com/images/modules/site/home-campaign/logos/pg.svg"
                  alt="P&amp;G logo"
                  height="32"
                  className="my-3 scale-90"
                />
                <img
                  src="https://github.githubassets.com/images/modules/site/home-campaign/logos/telus.svg"
                  alt="Telus logo"
                  height="32"
                  className="my-3 scale-90"
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
