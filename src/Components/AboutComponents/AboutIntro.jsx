import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  GlobeAltIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

// Languages offered
const languages = [
  { name: "English", icon: GlobeAltIcon },
  { name: "Korean", icon: AcademicCapIcon },
  { name: "Japanese", icon: BookOpenIcon },
  { name: "Chinese", icon: ChatBubbleLeftRightIcon },
];

export default function AboutIntro() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.15, duration: 0.6, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <motion.div
          className="md:w-1/2 flex flex-col gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-blue-900 mb-4"
            variants={itemVariants}
          >
            Learn from the Best
          </motion.h2>
          <motion.p
            className="text-gray-700 text-lg md:text-xl mb-6"
            variants={itemVariants}
          >
            We provide top-quality online courses from industry-leading experts.
            Our platform is designed to make learning easy, flexible, and
            engaging for everyone.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link
              to="/courses"
              className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              Explore Courses
            </Link>
          </motion.div>

          {/* Languages Offered */}
          <motion.div
            className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4"
            variants={containerVariants}
          >
            {languages.map((lang, index) => {
              const Icon = lang.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center hover:shadow-2xl transition"
                  variants={itemVariants}
                >
                  <Icon className="h-12 w-12 text-blue-600 mb-2" />
                  <span className="text-blue-900 font-semibold">
                    {lang.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Image / Illustration */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/aboutus.jpg"
            alt="Online Learning"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
