import { motion } from "framer-motion";

const Productivity = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="flex md:pl-10 space-x-3 md:space-x-10">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: false }}
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
              className="octicon octicon-vision mt-3"
            >
              <path d="M12 4.5C6.48 4.5 2 8.97 2 12s4.48 7.5 10 7.5 10-3.48 10-7.5S17.52 4.5 12 4.5zm0 13c-3.62 0-6.5-2.88-6.5-6.5S8.38 5.5 12 5.5 18.5 8.38 18.5 12 15.62 17.5 12 17.5zm0-10a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"></path>
            </svg>
            <span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-1 z-3"></span>
          </motion.div>
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className=" h-full w-[3px] mt-7 rounded-md bg-gradient-to-b from-[#7ee787]"
          ></motion.div>
        </div>
        <div className="md:w-10/12 mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            viewport={{ once: true }}
            className="text-[20px] md:text-2xl mb-7 font-medium js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: "200ms" }}
          >
            Vision
          </motion.div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            viewport={{ once: false }}
            className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-3xl mb-7 font-medium js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: "300ms" }}
          >
            <span className="text-green_four">Sustainable future </span>
            aim to develop problem-solving, leadership, and advocacy skills in
            young people, empowering them to lead sustainable initiatives that
            influence their peers and communities toward a greener, more
            sustainable future
          </motion.h3>
        </div>
      </div>
    </div>
  );
};

export default Productivity;
