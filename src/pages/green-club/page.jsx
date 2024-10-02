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
      {/* Hero Section */}
      <div className="relative bg-[url('/images/green-club/wellofscience-greenclub.jpg')] flex items-center justify-center bg-cover bg-center py-10 md:py-20 h-[500px] lg:h-[800px]">
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-green-700/30 to-green-300/20"></div>

        <div className="relative flex flex-col lg:flex-row items-center max-w-[1280px] md:px-10 mx-auto h-fit space-y-8 lg:space-y-0 lg:space-x-10">
          {/* Hero Text Section */}
          <div className="w-full  lg:ml-6 text-center lg:text-start text-white z-10">
            <motion.h1
              className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Green Clubs for Schools
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl font-semibold leading-snug md:leading-relaxed mt-4 lg:mt-6"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            >
              Championing Sustainability Across Schools and Campuses in Nigeria
            </motion.p>

            <a href="#green-club-enquires" className="scroll-smooth">
              <Button
                asChild
                className="mt-7 inline-block px-8 py-4 bg-green_three text-white text-lg rounded-full transition-transform transform hover:scale-95"
              >
                <p>Join us now</p>
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sections */}
      <div className="max-w-[1440px] xl:px-20 overflow-hidden sm:px-7 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
        >
          <Hero />
          <Goal />
          <Objectives />
          <SDG />
          <Collaboration />
          <KeyMetrics />
          <Gallery />
        </motion.div>
      </div>

      {/* Enquiries Section */}
      <EnquiriesForm />
    </Layout>
  );
};

export default GreenClub;
