import { useState } from "react";
import HoverCard from "./HoverCard";
import { motion } from "framer-motion";
import { objectiveStepData } from "../../store/data/green-club";

const Security = () => {

  return (
    <div className="max-w-[1280px] mx-auto">
      <motion.div className="flex md:pl-10 space-x-3 md:space-x-10">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="relative "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="24"
              height="24"
              // fill="#ffffff"
              className=""
            >
              <path d="M13.637 2.363h-.001l1.676.335c.09.018.164.084.19.173a.25.25 0 0 1-.062.249l-1.373 1.374a.876.876 0 0 1-.619.256H12.31L9.45 7.611A1.5 1.5 0 1 1 6.5 8a1.501 1.501 0 0 1 1.889-1.449l2.861-2.862V2.552c0-.232.092-.455.256-.619L12.88.559a.25.25 0 0 1 .249-.062c.089.026.155.1.173.19Z"></path>
              <path d="M2 8a6 6 0 1 0 11.769-1.656.751.751 0 1 1 1.442-.413 7.502 7.502 0 0 1-12.513 7.371A7.501 7.501 0 0 1 10.069.789a.75.75 0 0 1-.413 1.442A6.001 6.001 0 0 0 2 8Z"></path>
              <path d="M5 8a3.002 3.002 0 0 0 4.699 2.476 3 3 0 0 0 1.28-2.827.748.748 0 0 1 1.045-.782.75.75 0 0 1 .445.61A4.5 4.5 0 1 1 8.516 3.53a.75.75 0 1 1-.17 1.49A3 3 0 0 0 5 8Z"></path>
            </svg>
            <span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-3 z-3"></span>
          </motion.div>
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ delay: 0.8 }}
            className=" h-full w-[3px] mt-7 rounded-md bg-gradient-to-b from-[#abb4ff] via-[#797ef9] to-transparent"
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
            Our Objectives
          </h2>
          <h3
            className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-3xl mb-7 font-medium  js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: "300ms" }}
          >
            <p className="text-green_four">Our programs</p> foster a deep
            understanding of environmental issues and sustainable practices
          </h3>
        </motion.div>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-5 "
      >
        {objectiveStepData.map((data) => (
          <HoverCard
            key={data.title}
            backgroundColor="#EEEEF0"
            direction=""
            left="0"
            className=" border border-gray-100  outline-none shadow-2xl shadow-green-100"
          >
            <motion.div
              // variants={item}
              className="p-4  text-xl md:text-2xl mb-6 font-medium "
            >
              <div className="flex items-center space-x-4">
                <img
                  src={data.image}
                  alt=""
                  className="w-12  h-12 object-cover"
                />
                <p>{data.title}</p>
              </div>
              <p className="mt-4">{data.description}</p>
            </motion.div>
          </HoverCard>
        ))}
      </motion.div>
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "140px" }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="md:ml-12 ml-3 h-[140px] mt-[-20px] w-[3px] rounded-md bg-gradient-to-b from-transparent via-[#ea6045] to-[#ffa28b]"
      ></motion.div>
    </div>
  );
};

export default Security;
