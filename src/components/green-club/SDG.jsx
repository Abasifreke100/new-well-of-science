import { motion } from "framer-motion";
import HoverCard from "./HoverCard";

const SDG = () => {
  const hovered = false;
  const hovered1 = false;
  const hovered2 = false;

  return (
    <div className="max-w-[1280px] mx-auto ">
      <motion.div className="flex md:pl-10 space-x-3 md:space-x-10">
        <div className="flex flex-col items-center ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <svg
              aria-hidden="true"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              version="1.1"
              width="24"
              data-view-component="true"
              className="octicon octicon-vision mt-3 text-white"
            >
              <path d="M12 4.5C6.48 4.5 2 8.97 2 12s4.48 7.5 10 7.5 10-3.48 10-7.5S17.52 4.5 12 4.5zm0 13c-3.62 0-6.5-2.88-6.5-6.5S8.38 5.5 12 5.5 18.5 8.38 18.5 12 15.62 17.5 12 17.5zm0-10a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"></path>
            </svg>
            <span className="absolute left-0 top-2 h-[50%] w-full home-campaign-glowing-icon-glow-1 z-3"></span>
          </motion.div>
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className=" h-full w-[3px] rounded-md bg-gradient-to-b  from-[#7ee787]"
          ></motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, type: "tween" }}
          className="md:w-10/12 mb-24"
        >
          <h2
            className="text-[20px] md:text-2xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: "200ms" }}
          >
            Alignment with Sustainable Development Goals (SDGs)
          </h2>
          <h3
            className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-3xl mb-7 font-medium  text-white js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: "300ms" }}
          >
            <p className="text-green_four">Our Green Clubs </p> contribute to
            several key SDGs:
          </h3>
        </motion.div>
      </motion.div>
      <div className="relative z-[1]">
        <HoverCard
          backgroundColor="#547A1F"
          direction=""
          left="0"
          className="border"
        >
          <div className="overflow-auto md:flex flex-col md:space-y-20 flex-1 py-20 md:p-10 p-5 my-6    justify-between md:min-w-[400px]">
            <p className=" text-xl md:text-2xl mb-6 font-medium text-[#7d8590]">
              <span className="text-white font-medium">
                SDG 13: Climate Action
              </span>{" "}
              Promoting activities that reduce carbon footprints, enhance waste
              management, and raise awareness about climate change
            </p>
            <div>
              <a
                href=""
                className="py-1 inline-block text-xl text-white font-semibold"
              >
                Invest With GitHub Sponsers
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={` mb-[2px] text-white transition inline-block ml-3 ease-in duration-300  ${
                    hovered ? "translate-x-0 " : "-translate-x-1"
                  }`}
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fill="currentColor"
                    d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                  ></path>
                  <path
                    className={` text-white transition ease-in duration-150 ${
                      hovered ? " opacity-100" : "opacity-0 "
                    }`}
                    stroke="currentColor"
                    d="M1.75 8H11"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                </svg>
                <div
                  className={` ${
                    hovered ? "w-11/12 scale-100" : "w-0 scale-0"
                  } origin-left  transition ease-in duration-300 h-[2.5px] bg-white rounded-full`}
                ></div>
              </a>
            </div>
          </div>
        </HoverCard>
      </div>
      <div className="flex flex-col md:flex-row gap-10 ">
        <HoverCard
          backgroundColor="#547A1F"
          direction="flex-col"
          left="0"
          className="border"
        >
          <div className="md:flex flex-col flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32">
            <p className=" text-xl md:text-2xl mb-6 font-medium text-[#7d8590]">
              <span className="text-white font-semibold">
                SDG 4: Quality Education
              </span>{" "}
              Advocating for the integration of environmental education into
              school curriculums, enriching students&apos; knowledge and skills.
            </p>
            <div>
              <a
                // onMouseEnter={() => setHovered1(true)}
                // onMouseLeave={() => setHovered1(false)}
                href=""
                className="py-1 inline-block text-xl text-white font-semibold"
              >
                Explore Dependabot
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={` mb-[2px] text-white transition inline-block ml-3 ease-in duration-300  ${
                    hovered1 ? "translate-x-0 " : "-translate-x-1"
                  }`}
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fill="currentColor"
                    d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                  ></path>
                  <path
                    className={` text-white transition ease-in duration-150 ${
                      hovered1 ? " opacity-100" : "opacity-0 "
                    }`}
                    stroke="currentColor"
                    d="M1.75 8H11"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                </svg>
                <div
                  className={` ${
                    hovered1 ? "w-11/12 scale-100" : "w-0 scale-0"
                  } origin-left  transition ease-in duration-300 h-[2.5px] bg-white rounded-full`}
                ></div>
              </a>
            </div>
          </div>
        </HoverCard>
        <HoverCard
          backgroundColor="#547A1F"
          direction="flex-col"
          left="-400px"
          className="border"
        >
          <div className="md:flex flex-col  flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32 ">
            <p className=" text-xl md:text-2xl mb-6 font-medium text-[#7d8590]">
              <span className="text-white font-semibold">
                SDG 15: Life on Land
              </span>   Supporting initiatives to protect and restore ecosystems, promote
              biodiversity, and combat deforestation.
            </p>
            <div>
              <a
                // onMouseEnter={() => setHovered2(true)}
                // onMouseLeave={() => setHovered2(false)}
                href=""
                className="py-1 inline-block text-xl text-white font-semibold"
              >
                Download the latest SAST ebook
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={` mb-[2px] text-white transition inline-block ml-3 ease-in duration-300  ${
                    hovered2 ? "translate-x-0 " : "-translate-x-1"
                  }`}
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fill="currentColor"
                    d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                  ></path>
                  <path
                    className={` text-white transition ease-in duration-150 ${
                      hovered2 ? " opacity-100" : "opacity-0 "
                    }`}
                    stroke="currentColor"
                    d="M1.75 8H11"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>
                </svg>
                <div
                  className={` ${
                    hovered2 ? "w-11/12 scale-100" : "w-0 scale-0"
                  } origin-left  transition ease-in duration-300 h-[2.5px] bg-white rounded-full`}
                ></div>
              </a>
            </div>
          </div>
        </HoverCard>
      </div>
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "160px" }}
        transition={{ delay: 0.2 }}
        className=" md:ml-10 ml-3 h-[160px] mt-[-20px] w-[3px] rounded-md bg-gradient-to-b from-transparent via-[#797ef9] to-[#abb4ff]"
      ></motion.div>
    </div>
  );
};

export default SDG;
