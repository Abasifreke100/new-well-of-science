import React from "react";
import Layout from "../../components/layout";
import Hero from "../../components/green-club/Hero";
import Productivity from "../../components/green-club/Productivity";
import Security from "../../components/green-club/Security";
import SDG from "../../components/green-club/SDG";
import Collaboration from "../../components/green-club/GreenClubActivities";
import KeyMetrics from "../../components/green-club/KeyMetrics";
import Gallery from "../../components/green-club/Gallery";
import { Button } from "../../components/ui/button";
import EnquiriesForm from "../../components/green-club/Enquires";

const GreenClub = () => {
  return (
    <Layout className="py-0">
      <div className="relative bg-center">
        <div className="flex flex-col lg:flex-row  items-center  max-w-[1280px]  md:px-10 mx-auto  relative h-[700px]">
          <div className="w-full ml-6">
            <h1 className=" relative z-2   max-md:mb-5 text-[48px] text-green_three md:text-[72px] max-sm:leading-[40px] max-md:leading-[46px] lg:text-[60px] font-semibold ">
              {" "}
              Green Clubs for Schools
            </h1>
            <p className="relative z-1  text-[24px] md:text-[28px]  lg:text-[32px] leading-[30px] md:leading-[36px] lg:leading-[44px] mb-5 md:mb-2 md:10/12  lg:w-9/12 text-[#7d8590]">
              Championing Sustainability Across Schools and Campuses in Nigeria
            </p>
            <img src="/images/vector38.png" className="rotate-3" alt="" />
            <Button>Join us now</Button>
          </div>
          <img
            src="/images/green-club/green-club-logo.jpg"
            alt="Stripe logo"
            className=" lg:h-96 scale-90 mt-3 shadow-lg w-full lg:w-fit border rounded-md"
          />
        </div>
      </div>
      <div className="max-w-[1440px] xl:px-20 overflow-hidden md:px-0 sm:px-7 mx-auto">
        <Hero />
        <Productivity />
        <Security />
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
