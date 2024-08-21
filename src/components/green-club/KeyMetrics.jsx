import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaSchool, FaTree, FaRecycle, FaTrash, FaWater } from 'react-icons/fa';

const KeyMetrics = () => {
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
      animateCounter(setTertiaryClubsCount, 50);
      animateCounter(setSecondaryClubsCount, 30);
      animateCounter(setTreesPlantedCount, 500);
      animateCounter(setPlasticBottlesCount, 200);
      animateCounter(setMetalCansCount, 100);
      animateCounter(setWaterSachetsCount, 75);
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
    <section ref={ref} className="px-8 py-20 bg-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-200 via-blue-200 to-yellow-200 opacity-50 -z-10 animate-gradient" />
      <motion.div
        className="max-w-7xl mx-auto text-center relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-12">Key Metrics</h2>
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
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center hover:shadow-2xl transform hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              whileHover={{ scale: 1, rotate: 2 }}
            >
              {metric.icon}
              <h3 className="text-xl font-semibold mb-2">{metric.label}</h3>
              <p className="text-3xl font-bold">{metric.count}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default KeyMetrics;
