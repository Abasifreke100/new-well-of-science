import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaSchool, FaTree, FaRecycle, FaTrash, FaWater } from 'react-icons/fa';

const KeyMetricOverview = () => {
  const [tertiaryClubsCount, setTertiaryClubsCount] = useState(0);
  const [secondaryClubsCount, setSecondaryClubsCount] = useState(0);
  const [treesPlantedCount, setTreesPlantedCount] = useState(0);
  const [plasticBottlesCount, setPlasticBottlesCount] = useState(0);
  const [metalCansCount, setMetalCansCount] = useState(0);
  const [waterSachetsCount, setWaterSachetsCount] = useState(0);

  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        transition: { duration: 1.5 },
      });
      animateCounter(setTertiaryClubsCount, 10);
      animateCounter(setSecondaryClubsCount, 70);
      animateCounter(setTreesPlantedCount, 200);
      animateCounter(setPlasticBottlesCount, 0);
      animateCounter(setMetalCansCount, 0);
      animateCounter(setWaterSachetsCount, 0);
    }
  }, [inView, controls]);

  const animateCounter = (setter, target) => {
    let count = 0;
    const interval = setInterval(() => {
      if (count >= target) {
        clearInterval(interval);
      } else {
        count += Math.ceil(target / 100);
        setter(count);
      }
    }, 50); // Adjust speed here
  };

  return (
    <section ref={ref} className="  font-gen_sans relative overflow-hidden">
      {/* <div className="absolute inset-0 bg-gradient-to-r from-green-200 via-blue-200 to-yellow-200 opacity-50 -z-10 animate-gradient" /> */}
      <motion.div
        className="text-center relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {[
            { icon: <FaSchool className="text-4xl text-green-500" />, label: "Number of Clubs in Tertiary Institutions", count: tertiaryClubsCount },
            { icon: <FaSchool className="text-4xl text-blue-500" />, label: "Number of Clubs in Secondary Schools", count: secondaryClubsCount },
            { icon: <FaTree className="text-4xl text-green-600" />, label: "Number of Trees Planted", count: treesPlantedCount },
            { icon: <FaRecycle className="text-4xl text-yellow-500" />, label: "Plastic Bottles Collected (kg)", count: plasticBottlesCount },
            { icon: <FaTrash className="text-4xl text-gray-500" />, label: "Metal Cans Collected (kg)", count: metalCansCount },
            { icon: <FaWater className="text-4xl text-blue-400" />, label: "Water Sachets Collected (kg)", count: waterSachetsCount },
          ].map((metric, index) => (
            <motion.div
              key={metric.label}
              className="border  p-6 rounded-lg shadow-lg flex  font-gen_sans flex-col items-center hover:shadow-2xl transform hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              whileHover={{ scale: 1, rotate: 2 }}
            >
              {metric.icon}
              <h3 className="text-xl font-medium mb-2  mt-2">{metric.label}</h3>
              <p className="text-3xl font-semibold">{metric.count}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default  KeyMetricOverview ;
    