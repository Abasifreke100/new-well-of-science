import { motion } from "framer-motion";

const OurPartners = () => {
  return (
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100 text-center  px-4">
    <div className="container mx-auto">
    <motion.h2
        className="text-5xl font-bold mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Partners
      </motion.h2>

      <motion.div
        className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 border border-gray-200"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.img
          src="/images/green-club/access-bank-logo.png"
          alt="Access Bank"
          className="mx-auto mb-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          style={{
            width: "180px",
            padding: "18px",
            backgroundColor: "#ffffff",
          }}
          initial={{ opacity: 0, y: 10, rotate: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          whileHover={{ scale: 0.9, rotate: 5 }}
          animate={{
            rotate: [0, 2, -2, 2, -2, 0],
            transition: {
              duration: 0.8,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 25,
            },
          }}
        />

        <motion.p
          className="text-2xl font-semibold mb-4 text-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.7 }}
        >
          Access Bank is our proud partner in championing sustainability across
          Nigerian schools.
        </motion.p>
      </motion.div>
    </div>
    </section>
  );
};

export default OurPartners;
