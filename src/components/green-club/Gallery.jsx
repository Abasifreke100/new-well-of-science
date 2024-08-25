import { useState } from "react";
import { motion } from "framer-motion";
import { data } from "../../store/data/green-club";

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.classList.add("no-scroll");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove("no-scroll");
  };

  return (
    <section className="relative py-20 container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <motion.div
          className="lg:w-1/2 text-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl font-gen_sans font-medium mb-4"
          >
            Gallery
          </h2>
          <p className="text-xl mb-6">
            Explore our Green Clubs in action! Scroll through photos of students
            participating in environmental activities or click &quot;See
            More&quot; to view an expanded gallery.
          </p>
          <motion.button
            onClick={openModal}
            className="mt-8 inline-block bg-green_four text-white px-6 py-3 rounded-lg font-semibold hover:bg-green_one transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            See More
          </motion.button>
        </motion.div>

        <div className="lg:w-1/2 relative h-96 ">
          <img src="/images/main-collage.png" alt="" />
          {/* am using this to set my collage screenshot [WEEDSDOM] */}
          {/* <motion.div
            className="absolute top-0 left-0 w-[310px] h-[250px]  bg-[url('/images/green-club/climate-action.png')] bg-cover bg-center rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ zIndex: 4 }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg hero-gradient"></div>
          </motion.div>
          <motion.div
            className="absolute -bottom-16 left-5 w-[220px] h-[140px] bg-[url('/images/green-club/life-on-land.jpg')] bg-cover bg-center rounded-lg shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ zIndex: 3 }}
          >
            <div className="absolute inset-0 bg-black  rounded-lg hero-gradient"></div>
          </motion.div>
          <motion.div
            className="absolute -bottom-10 left-[230px]  w-[190px]  h-[300px] bg-[url('/images/green-club/quality-education.jpeg')] bg-cover  rounded-lg shadow-lg z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ zIndex: 2 }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg hero-gradient"></div>
          </motion.div>
          <motion.div
            className="absolute top-1 right-0 w-[250px] h-[300px] bg-[url('/images/green-club/life-on-land.jpg')] bg-cover bg-center rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{ zIndex: 1 }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30 hero-gradient rounded-lg"></div>
          </motion.div> */}
        </div>
      </div>

      {/* Modal */}
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
            <p  className="font-semibold">Our Collection</p>
            {/* <button
              onClick={closeModal}
              className="absolute top-0 right-4 text-gray-600 hover:text-gray-800"
            >
              <X />
            </button> */}
          <motion.div
            className=" relative overflow-y-scroll h-[400px] mt-5"
           
          >
            <div className="gallery ">
              {data.map((item) => (
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
                  <div className="absolute inset-0 z-10 w-full h-full hero-gradient" />
                </div>
              ))}
            </div>
          </motion.div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
