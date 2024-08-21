import { motion } from "framer-motion";
import ObjectiveStep from "./steps/ObjectiveStep";

const Vision = () => {

  return (
    <div className="mssl:container mx-2 mssl:mx-auto py-8">
      <motion.p
        initial={{
          x: -4,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.8, ease: "easeInOut" },
        }}
        className="mt-3 text-xl md:text-2xl font-medium z-30 bg-[url('/images/backgroundgoals.png')]  bg-clip-text text-fill-transparent"
      >
        Welcome to <br />
        <span className="font-semibold text-3xl md:text-4xl">Green Club</span>
      </motion.p>
      <div
        className={`relative  h-[1200px]
           ssml:h-[750px]  lg:h-[700px] mt-6`}
      >
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: 0.1, ease: "easeInOut" },
          }}
          className="relative w-[75%] md:w-[50%] msl:w-[35%] bg-[url('/images/green-club/green-club.jpg')] rounded-md overflow-hidden bg-cover  h-[390px] p-3"
        >
          <div className="absolute inset-0  w-full h-full hero-gradient" />
          <h2 className="md:text-[43px] font-medium  mt-4 text-white">
          Towards a <span className="bg-[url('/images/backgroundgoals.png')]  bg-clip-text text-fill-transparent">Greener</span>, more Sustainable Future
          </h2>
          
        </motion.div>
          <div
            className={`absolute right-0 bottom-0 w-[92%] msl:w-[75%] bg-white  shadow-2xl  rounded-sm h-fit   msl:h-[450px] overflow-hidden`}
          >
            <div className="text-start h-full w-full">
              <ObjectiveStep/>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Vision;
