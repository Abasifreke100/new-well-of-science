import { motion } from "framer-motion";

const Goal = () => {
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
              className="octicon octicon-vision mt-1.5"
            >
              <path d="M12 4.5C6.48 4.5 2 8.97 2 12s4.48 7.5 10 7.5 10-3.48 10-7.5S17.52 4.5 12 4.5zm0 13c-3.62 0-6.5-2.88-6.5-6.5S8.38 5.5 12 5.5 18.5 8.38 18.5 12 15.62 17.5 12 17.5zm0-10a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"></path>
            </svg>
          </motion.div>
        
        </div>
        <div className="md:w-10/12 mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            viewport={{ once: true }}
            className="text-[20px] md:text-2xl mb-5 font-medium js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: "200ms" }}
          >
            Goal
          </motion.div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            viewport={{ once: false }}
            className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-3xl mb-7 font-medium js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: "300ms" }}
          >
            To empower students and schools in establishing active Green Clubs,
            stimulate green skills acquisition, promote sustainable habits, and
            collaborate to create a greener and more sustainable future
          </motion.h3>
        </div>
      </div>
    </div>
  );
};

export default Goal;
