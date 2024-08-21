import { motion } from "framer-motion";
import { activities } from "../../store/data/green-club";

const GreenClubActivities = () => {
  return (
    <section className="px-8 py-10 ">
      <motion.h2
        className="text-5xl font-extrabold  text-center bg-[url('/images/backgroundgoals.png')]  bg-clip-text text-fill-transparent mb-16 py-3 pb-5"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{ fontFamily: "'Pacifico', cursive" }}
      >
        Green Club Activities
      </motion.h2>

      <div className="max-w-7xl mx-auto">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.category}
            className="mb-12"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
              <motion.div
                className="md:w-1/3 mb-8 md:mb-0"
                initial={{
                  color: "#42690F",
                }}
                whileHover={{ scale: 1.05, color: "#42690F" }}
                transition={{ duration: 0.3 }}
              >
                <h3
                  className="text-3xl text-green_four font-semibold  mb-4"
                  style={{ fontFamily: "'Pacifico', cursive" }}
                >
                  {activity.category}
                </h3>
              </motion.div>
              <div className="md:w-2/3 grid grid-cols-1 gap-8">
                {activity.items.map((item) => (
                  <motion.div
                    key={item.title}
                    className="bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl"
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.h4
                      className="text-2xl font-medium text-gray-800 mb-2"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {item.title}
                    </motion.h4>
                    <motion.p
                      className="text-gray-600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {item.description}
                    </motion.p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GreenClubActivities;
