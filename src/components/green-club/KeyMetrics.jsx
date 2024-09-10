import { motion } from "framer-motion";
import KeyMetricOverview from "./KeyMetricOverview";

const KeyMetrics = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="flex md:pl-7 space-x-3 md:space-x-10">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <svg
              aria-hidden="true"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              className="octicon octicon-bar-chart mt-3"
            >
              <path d="M3 3h2v18H3V3zm6 7h2v11H9V10zm6-5h2v16h-2V5zm6 9h2v7h-2v-7z"></path>
            </svg>

            <span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-2 z-3"></span>
          </motion.div>
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ delay: 0.8 }}
            className=" h-full w-[3px] mt-7 rounded-md bg-gradient-to-b from-[#ffd6cc] via-[#ec6547] to-transparent"
          ></motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, type: "tween" }}
          className="md:w-10/12 mb-24"
        >
          <h2
            className="text-[20px] md:text-2xl mb-7 font-medium  js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: "200ms" }}
          >
            Key Metrics
          </h2>
          <h3
            className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium  js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: "300ms" }}
          >
            Our impact is data driven
          </h3>
        </motion.div>
      </div>
      <KeyMetricOverview />
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "160px" }}
        transition={{ delay: 0.2 }}
        className=" md:ml-10 ml-3 h-[160px] mt-[-20px] w-[3px] rounded-md bg-gradient-to-b from-transparent via-[#797ef9] to-[#abb4ff]"
      ></motion.div>
    </div>
  );
};

export default KeyMetrics;
