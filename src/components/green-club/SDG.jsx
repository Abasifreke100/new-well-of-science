import { motion } from "framer-motion";
import HoverCard from "./HoverCard";

const SDG = () => {
  const sdgItems = [
    {
      id: 1,
      title: "SDG 13: Climate Action",
      description:
        "Promoting activities that reduce carbon footprints, enhance waste management, and raise awareness about climate change.",
      imgSrc: "./images/green-club/sdg_13.png",
      altText: "sdg_13",
    },
    {
      id: 2,
      title: "SDG 4: Quality Education",
      description:
        "Advocating for the integration of environmental education into school curriculums, enriching students' knowledge and skills.",
      imgSrc: "./images/green-club/sdg_4.png",
      altText: "sdg_4",
    },
    {
      id: 3,
      title: "SDG 15: Life on Land",
      description:
        "Supporting initiatives to protect and restore ecosystems, promote biodiversity, and combat deforestation.",
      imgSrc: "./images/green-club/sdg_15.png",
      altText: "sdg_15",
    },
  ];

  return (
    <div className="max-w-[1280px] mx-auto my-12 ">
      <motion.div className="flex md:pl-10 space-x-3 md:space-x-10 mt-12">
        <div className="flex flex-col items-center ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            viewport={{ once: true }}
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
              className="octicon octicon-vision mt-3 "
            >
              <path d="M12 4.5C6.48 4.5 2 8.97 2 12s4.48 7.5 10 7.5 10-3.48 10-7.5S17.52 4.5 12 4.5zm0 13c-3.62 0-6.5-2.88-6.5-6.5S8.38 5.5 12 5.5 18.5 8.38 18.5 12 15.62 17.5 12 17.5zm0-10a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"></path>
            </svg>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, type: "tween" }}
          className="md:w-10/12 mb-5"
        >
          <h2
            className="text-[20px] md:text-2xl mb-7 font-medium  js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: "200ms" }}
          >
            Alignment with Sustainable Development Goals (SDGs)
          </h2>
          <h3
            className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-3xl mb-7 font-medium   js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: "300ms" }}
          >
            <p className="text-green_four">Our Green Clubs </p> contribute to
            several key SDGs:
          </h3>
        </motion.div>
      </motion.div>
      <div className="grid grid-cols-12 gap-6 w-full">
        {/* Render each SDG item as a card */}
        {sdgItems.map((item, index) => (
          <div
            key={item.id}
            className={`col-span-12 ${
              index === 0 ? "lg:col-span-4" : "md:col-span-6 lg:col-span-4"
            } flex justify-center`}
          >
            <HoverCard
              backgroundColor="#EEEEF0"
              direction=""
              left="0"
              className={`border border-gray-100  ${
                index === 0 ? "h-[500px] mmd:h-fit lg:h-[500px]" : "h-[500px]"
              } w-full flex justify-center items-center`}
            >
              <div
                className={`overflow-auto flex flex-col justify-between items-center space-y-6 h-full p-4 sm:p-6 md:p-8 ${
                  index === 0 ? "md:space-y-10 lg:space-y-12" : "md:space-y-8"
                }`}
              >
                {/* Text Section */}
                <p
                  className={`text-lg sm:text-xl md:text-xl font-medium text-[#7d8590] text-center md:text-left`}
                >
                  <span className="font-medium text-green_four block mb-2">
                    {item.title}
                  </span>
                  {item.description}
                </p>

                {/* Image Section */}
                <img
                  src={item.imgSrc}
                  alt={item.altText}
                  className={`h-32 w-32 sm:h-40 sm:w-40 md:h-44 md:w-44 lg:h-52 lg:w-52 rounded-md`}
                />
              </div>
            </HoverCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SDG;
