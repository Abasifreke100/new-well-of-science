import { motion } from "framer-motion";
import KeyMetricOverview from "./KeyMetricOverview";

const KeyMetrics = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="flex md:pl-7 space-x-3 md:space-x-10 mt-12">
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
              className="octicon octicon-bar-chart mt-1"
            >
              <path d="M3 3h2v18H3V3zm6 7h2v11H9V10zm6-5h2v16h-2V5zm6 9h2v7h-2v-7z"></path>
            </svg>

          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, type: "tween" }}
          className="md:w-10/12 mb-3"
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
    </div>
  );
};

export default KeyMetrics;
