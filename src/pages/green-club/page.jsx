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
      <div className="relative bg-gradient-to-b from-white via-green-50 to-[#f6fef9] py-10 md:py-20">
        <div className="flex flex-col lg:flex-row items-center max-w-[1280px] md:px-10 mx-auto relative h-full space-y-8 lg:space-y-0 lg:space-x-10">
          {/* Hero Text Section */}
          <div className="w-full lg:w-1/2 lg:ml-6 text-center lg:text-start">
            <motion.h1
              className="text-green_three text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Green Clubs for Schools
            </motion.h1>
            <motion.p
              className="text-green_three text-xl md:text-2xl lg:text-3xl font-semibold leading-snug md:leading-relaxed mt-4 lg:mt-6"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            >
              Championing Sustainability Across Schools and Campuses in Nigeria
            </motion.p>
            <motion.img
              src="/images/vector38.png"
              className="absolute top-0 right-10 w-10 h-10"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              alt="Floating Leaf"
            />

            <a href="#green-club-enquires" className="scroll-smooth">
              <Button
                asChild
                className="mt-7 inline-block px-8 py-4 bg-green_three hover:bg-green_two text-white text-lg rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
              >
                <p>Join us now</p>
              </Button>
            </a>
          </div>

          {/* Hero Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <motion.img
              src="/images/green-club/wellofscience-greenclub.jpg"
              alt="Green Club Activity"
              className="lg:h-[500px] w-full lg:w-auto scale-90 mt-3 shadow-lg border rounded-md hover:scale-95 transition-transform duration-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>

      {/* Main Sections */}
      <div className="max-w-[1440px] bg-gradient-to-b from-[#f6fef9] to-white via-green-50  xl:px-20 overflow-hidden sm:px-7 mx-auto">
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
