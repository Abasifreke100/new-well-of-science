import React from "react";
import Layout from "../../components/layout";
import Hero from "../../components/green-club/Hero";
import Productivity from "../../components/green-club/Productivity";
import Security from "../../components/green-club/Security";
import SDG from "../../components/green-club/SDG";
import Collaboration from "../../components/green-club/GreenClubActivities";
import KeyMetrics from "../../components/green-club/KeyMetrics";
import Gallery from "../../components/green-club/Gallery";

const GreenClub = () => {
  return (
    <Layout className="py-0">
      <div className="h-[500px] relative bg-center   bg-[url('/images/green-club/green-club.jpg')]  text-white  bg-cover flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 z-30 w-full h-full hero-gradient" />
      </div>
      <div className="max-w-[1440px] bg-black  xl:px-20 overflow-hidden md:px-0 sm:px-7 mx-auto">
        <Hero />
        <Productivity />
        <Security />
        <SDG />
        <Collaboration/>
        <KeyMetrics/>
        <Gallery/>
      </div>
    </Layout>
  );
};

export default GreenClub;
