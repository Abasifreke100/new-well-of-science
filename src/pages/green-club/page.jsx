import Layout from "../../components/layout";
import { motion } from "framer-motion";
import TextAnimation from "../../components/shared/TextAnimation";
import Vision from "../../components/green-club/Vision";
import SDG from "../../components/green-club/SDG";
import GreenClubActivities from "../../components/green-club/GreenClubActivities";
import KeyMetrics from "../../components/green-club/KeyMetrics";
import OurPartners from "../../components/green-club/OurPartners";
import Gallery from "../../components/green-club/Gallery";
import EnquiriesForm from "../../components/green-club/EnquiresSection";

const GreenClubPage = () => {
  return (
    <Layout>
      <div className="flex flex-col w-full overflow-hidden ">
        <div className="h-[400px] relative  bg-[url('/images/backgroundgoals.png')]  text-white  bg-cover flex flex-col items-center justify-center text-center">
          <div className="absolute inset-0 z-10 w-full h-full hero-gradient" />
          <TextAnimation
            text1="Championing Sustainability Across"
            text2="  Schools and Campuses in Nigeria"
            letterAnimationDuration={0.5}
            scaleAnimationDelay={2}
          />{" "}
          <motion.p
            initial={{
              y: -17,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: "easeInOut" },
            }}
            className="mt-3 text-md md:text-xl font-medium z-30 text-[#E0E0E0]"
          >
            Join our mission to empower students across Nigeria to take
            meaningful action for the environment.
          </motion.p>
        </div>
        <Vision />
        <SDG />
        <GreenClubActivities />
        <KeyMetrics/>
        <OurPartners/>
        <Gallery/>
        <EnquiriesForm/>
      </div>
    </Layout>
  );
};

export default GreenClubPage;
