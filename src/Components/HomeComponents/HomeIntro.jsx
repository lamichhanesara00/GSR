import React from "react";
import { motion } from "framer-motion";

const HomeIntro = () => {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative overflow-hidden bg-gray-50">
      <motion.div
        className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Media Section */}
        <motion.div
          className="relative group"
          variants={fadeUp}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="Aboutvision.jpg"
            alt="GSR Abroad Consultancy"
            className="w-full h-auto rounded-3xl shadow-2xl object-cover transform transition-transform duration-500"
          />
          {/* Decorative circle */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-40"></div>
        </motion.div>

        {/* Text Section */}
        <motion.div className="space-y-6" variants={fadeUp}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Choose GSR Educational Consultancy — Your Trusted Abroad Partner
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At GSR, we guide students toward achieving their dreams of studying
            abroad with confidence. From selecting the right university to visa
            assistance and pre-departure preparation, our team ensures a smooth
            journey every step of the way. Your future deserves the best — and
            that’s what we deliver.
          </p>
          {/* <motion.button
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey
          </motion.button> */}
        </motion.div>
      </motion.div>

      {/* Decorative gradient blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-30"></div>
    </section>
  );
};

export default HomeIntro;
