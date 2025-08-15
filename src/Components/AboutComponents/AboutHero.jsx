import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Smooth animated letters
const AnimatedTextLetters = ({ text, className }) => {
  const letters = Array.from(text);
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06 },
    },
  };
  const child = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 18 },
    },
  };
  
   return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={`${className} flex flex-wrap`}
    >
      {letters.map((char, index) => (
        <motion.span key={index} variants={child}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Smooth animated words
const AnimatedTextWords = ({ text, className }) => {
  const words = text.split(" ");
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };
  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 20 },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={`${className} flex flex-wrap`}
    >
      {words.map((word, index) => (
        <motion.span key={index} variants={child} className="mr-2">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default function AboutHero() {
  return (
    <section className="relative h-[80vh] flex items-end pb-16">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/Aboutvision.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#002452] via-[#002452]/50 to-white/0" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 w-full"
      >
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end w-full gap-6">
          {/* Left side: Animated heading & paragraph */}
          <div className="text-white max-w-2xl">
            <AnimatedTextLetters
              text="About GSR"
              className="text-5xl md:text-7xl font-bold mb-4"
            />
            <AnimatedTextWords
              text="We are committed to guiding students towards global educational opportunities with integrity and care."
              className="text-xl md:text-2xl font-extralight leading-relaxed"
            />
          </div>

          {/* Right side: Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-lg text-lg shadow-lg"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
