import { motion } from "framer-motion";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import { data, tertiaryInstitutionsData } from "../../store/data/green-club";
import { Button } from "../ui/button";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("secondary");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const visibleImages = 6; // Initially show 4 images

  const openModal = () => {
    setIsModalOpen(true);
    document.body.classList.add("no-scroll");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove("no-scroll");
  };
  // Tab handler
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="max-w-[1280px] mx-auto mb-4 mt-12">
      <div className="flex md:pl-7 space-x-3 md:space-x-10">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <svg
              aria-hidden="true"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              className="octicon octicon-image mt-3"
            >
              <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zm-4-5.59l-3-3c-.39-.39-1.02-.39-1.41 0l-4 4L5 13.83 6.41 12l4 4 3-3 3.59 3.59L17 13.41z"></path>
            </svg>
          </motion.div>
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
            Gallery
          </h2>
          <h3
            className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-3xl font-medium  js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: "300ms" }}
          >
            <span className="text-green_four">
              Explore our Green Clubs in action!
            </span>{" "}
            Scroll through photos of students participating in environmental
            activities or click &quot;See More&quot; to view an expanded
            gallery.
          </h3>
        </motion.div>
      </div>
      <div className="flex justify-center  space-x-4 mb-8">
        <div className="bg-gray-200 p-1 rounded-full">
          <button
            onClick={() => handleTabClick("secondary")}
            className={`px-4 py-3 rounded-full  border-none outline-none text-[13px] md:text-xl font-medium ${
              activeTab === "secondary"
                ? "bg-green_one text-white"
                : "bg-gray-200"
            }`}
          >
            Secondary School
          </button>
          <button
            onClick={() => handleTabClick("tertiary")}
            className={`px-4 py-3 rounded-full  border-none outline-none text-[13px] md:text-xl font-medium ${
              activeTab === "tertiary"
                ? "bg-green_one text-white"
                : "bg-gray-200"
            }`}
          >
            Tertiary Schools
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col">
        {activeTab === "secondary" && (
          <div className="p-4">
            <Marquee gradient gradientWidth={10}>
              <div className="flex space-x-4">
                {data.slice(0, visibleImages).map((datum, index) => (
                  <div
                    key={datum.id}
                    className={`flex gap-4 items-center ${
                      index === 0 && "ml-3"
                    }`}
                  >
                    <img
                      src={datum.imgSrc}
                      alt=""
                      className="w-44 h-60 object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        )}
        {activeTab === "tertiary" && (
          <div className="p-4">
            <Marquee gradient gradientWidth={10}>
              <div className="flex space-x-4">
                {tertiaryInstitutionsData
                  .slice(0, visibleImages)
                  .map((datum, index) => (
                    <div
                      key={datum.id}
                      className={`flex gap-4 items-center ${
                        index === 0 && "ml-3"
                      }`}
                    >
                      <img
                        src={datum.imgSrc}
                        alt=""
                        className="w-44 h-60 object-cover rounded-lg"
                      />
                    </div>
                  ))}
              </div>
            </Marquee>
          </div>
        )}
        <Button onClick={openModal} className="self-end mr-5">
          View More
        </Button>
      </div>
      {/* gallery details over here */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white py-3 px-3 mssl:p-8 h-[510px] rounded-lg shadow-lg w-[320px] customMd:w-[420px] md:w-[500px] lg:w-[700px] overflow"
          >
            <p className="font-semibold">Our Collection</p>
            {/* <button
              onClick={closeModal}
              className="absolute top-0 right-4 text-gray-600 hover:text-gray-800"
            >
              <X />
            </button> */}
            <motion.div className=" relative overflow-y-scroll h-[400px] mt-5">
              <div className="gallery ">
                {activeTab === "secondary"
                  ? data.map((item) => (
                      <div
                        key={item.id}
                        className="pics relative overflow-hidden group rounded-md"
                      >
                        <img
                          src={item.imgSrc}
                          alt=""
                          style={{ width: "100%" }}
                          className="group-hover:scale-150 transition-transform duration-300 ease-in-out"
                        />
                      </div>
                    ))
                  : tertiaryInstitutionsData.map((item) => (
                      <div
                        key={item.id}
                        className="pics relative overflow-hidden group rounded-md"
                      >
                        <img
                          src={item.imgSrc}
                          alt=""
                          style={{ width: "100%" }}
                          className="group-hover:scale-150 transition-transform duration-300 ease-in-out"
                        />
                      </div>
                    ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
