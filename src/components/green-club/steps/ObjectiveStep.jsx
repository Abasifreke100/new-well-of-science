import { motion } from "framer-motion";
import { objectiveStepData } from "../../../store/data/green-club";

const ObjectiveStep = () => {
 

  return (
    <div className=" py-8 p-4 msl:p-12 ">
      <h2 className="text-3xl font-medium bg-[url('/images/backgroundgoals.png')]  bg-clip-text text-fill-transparent">
        Objective
      </h2>
      <p className="mt-3 font-medium">
        We empower students through education, support, skill development, and
        mentorship to lead sustainable initiatives and foster environmental
        stewardship in schools.
      </p>
      <div className=" grid grid-cols-1 ssml:grid-cols-2 msl:flex justify-evenly mt-12 gap-2">
        {objectiveStepData.map((data) => {
          return (
            <div
              key={data.title}
              className="border  msl:w-[25%] relative flex flex-col items-center py-8 group hover:border hover:border-green_one"
            >
              <img src={data.image} alt="" className="w-12 object-cover" />
              <p className="text-sm font-medium text-center mt-8">
                {data.title}
              </p>

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  rotate: 0,
                  filter: "blur(4px)",
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1,
                  rotate: 5, // Slight rotation
                  filter: "blur(0px)", // Remove blur
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)", // Shadow   effect
                }}
                transition={{ duration: 0.4 }} // Adjust duration as needed
                className="absolute h-full w-full top-0 p-2 bg-green_two flex items-center justify-center text-center"
              >
                <p className="text-sm text-green-50 font-gen_sans font-medium">
                  {data.description}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ObjectiveStep;
