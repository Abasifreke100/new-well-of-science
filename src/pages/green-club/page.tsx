import React from "react";
import Layout from "../../components/layout";
import Hero from "../../components/green-club/Hero";
import Goal from "../../components/green-club/Goal";
import Objectives from "../../components/green-club/Objectives";
import SDG from "../../components/green-club/SDG";
import Collaboration from "../../components/green-club/GreenClubActivities";
import KeyMetrics from "../../components/green-club/KeyMetrics";
import Gallery from "../../components/green-club/Gallery";
import { Button } from "../../components/ui/button";
import EnquiriesForm from "../../components/green-club/Enquires";
import { motion } from "framer-motion";

const GreenClub = () => {
  return (
    <Layout className="py-0 pt-20">
      <div className="relative bg-center">
        <div className="flex flex-col lg:flex-row  items-center   max-w-[1280px]  md:px-10 mx-auto  relative h-full">
          <div className="w-full lg:ml-6 mt-8">
            <motion.h1
              className="relative z-2 text-center md:text-start max-md:mb-5 text-6xl text-green_three lg:text-[38px] font-semibold"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Green Clubs for Schools
            </motion.h1>
            <motion.p
              className="relative z-1 text-[24px] md:text-[28px] lg:text-[34px] leading-[30px] md:leading-[36px] lg:leading-[44px] mb-5 md:mb-2 font-semibold text-green_three"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            >
              Championing Sustainability Across Schools and Campuses in Nigeria
            </motion.p>
            <img src="/images/vector38.png" className="rotate-12" alt="" />
            <a href="#green-club-enquires">
              <Button asChild className={"ml-48 mt-7"}>
                <p>Join us now</p>
              </Button>
            </a>
          </div>
          <img
            src="/images/green-club/wellofscience-greenclub.jpg"
            alt="Stripe logo"
            className=" lg:h-[500px] scale-90 mt-3 shadow-lg w-full lg:w-fit border rounded-md"
          />
        </div>
      </div>
      <div className="max-w-[1440px] xl:px-20 overflow-hidden  sm:px-7 mx-auto">
        <Hero />
        <Goal />
        <Objectives />
        <SDG />
        <Collaboration />
        <KeyMetrics />
        <Gallery />
      </div>
      <EnquiriesForm />
    </Layout>
  );
};

export default GreenClub;
