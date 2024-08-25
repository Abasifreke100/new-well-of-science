import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cardsData } from "../../store/data/green-club";


const CardSlider = ({ cards }) => {
  const animationVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: "0%",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99], // Easing function for smoother transitions
      },
    },
    exit: {
      x: "-100%",
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === cards.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Adjust timing to your preference
    return () => clearInterval(interval);
  }, [cards]);

  const currentCard = cards[currentIndex];
  const nextCard = cards[(currentIndex + 1) % cards.length];

  return (
    <div className="flex gap-4 flex-col msl:flex-row overflow-hidden ">
      <motion.div
        key={currentCard.id}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={animationVariants}
        className="bg-white border w-full lg:h-full xl:h-[280px]  flex flex-col  md:flex-row rounded-xl overflow-hidden p-4 gap-2"
      >
        <div className={`sml:w-[200px] ${currentCard.background} h-[200px] lg:h-full  bg-${currentCard.backgroundPosition} rounded-md relative overflow-hidden bg-cover`}>
          <div className="absolute inset-0 z-10 w-full h-full hero-gradient" />
          <p className="text-white z-20 absolute bottom-10 text-3xl left-4">
            {currentCard.id}
          </p>
        </div>
        <div className="flex-1 ml-2">
          <p className="mt-3 msl:mt-20 text-2xl font-semibold">{currentCard.title}</p>
          <p className="mt-3 text-md">{currentCard.description}</p>
        </div>
      </motion.div>
      <motion.div
        key={nextCard.id}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={animationVariants}
        className={`h-[200px]  msl:h-[300px] md:h-[280px] w-full msl:w-[400px] lg:h-[279px] lg:w-[280px] relative ${nextCard.background} bg-${nextCard.backgroundPosition} overflow-hidden rounded-lg bg-cover`}
      >
        <div className="absolute inset-0 z-10 w-full h-full hero-gradient" />
        <p className="text-white z-20 absolute bottom-16 text-xl left-4">
          {nextCard.id}
        </p>
        <p className="text-white z-20 absolute bottom-9 font-medium text-xl left-4">
          {nextCard.title}
        </p>
      </motion.div>
    </div>
  );
};




const SDG = () => {
  return (
    <div className="bg-[#eae4d5] py-3">
      <div className="mssl:container mx-2 mssl:mx-auto gap-4  flex flex-col lg:flex-row  mssl:h-[600px] msl:h-fit mt-4 p-3 sml:p-4">
      <div className=" flex-1 md:order-2 msl:order-1 lg:self-end">
        <p className="font-medium text-2xl text-green_four mt-12 mb-8">
          Sustainable Development Goals (SDGs)
        </p>
        <CardSlider cards={cardsData}/>
      </div>
      <div className="bg-white   md:w-[350px] md:order-1 msl:order-2 sml:w-full md:hidden lg:block p-4 pb-2 h-fit rounded-lg overflow-hidden relative">
        <img
          src="images/green-club/map-of-nigeria.gif"
          alt="map_of_nigeria"
          className=" w-full  object-cover"
        />
        <p className="mt-4 font-medium bg-[url('/images/backgroundgoals.png')] bg-clip-text text-fill-transparent">
          Sustainable Development Goals (SDGs)
        </p>
        <div className=" flex  items-center mt-2 h-[60px] justify-between">
          <div className="  relative flex-1 flex items-center">
            <div className=" bg-[url('/images/grpphoto.png')]  bg-cover text-green_one grid place-items-center w-8 h-8 rounded-full absolute " />
            <div className="border bg-white text-green_one grid place-items-center w-8 h-8 rounded-full absolute left-[10%]">
              <img
                src="images/green-club/obj_step_two.png"
                alt=""
                className="w-5 object-cover"
              />
            </div>
            <div className="border bg-white text-green_one grid place-items-center w-8 h-8 rounded-full absolute left-[20%]">
              <img
                src="images/green-club/binoculars.png"
                alt=""
                className="w-5 object-cover"
              />
            </div>
          </div>
          <button className="bg-green_one px-3 py-2 border-none cursor-default outline-none rounded-3xl text-sm font-medium h-fit text-green-50">
            Join us now
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SDG;
