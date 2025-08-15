import {
  AcademicCapIcon,
  GlobeAmericasIcon,
} from "@heroicons/react/24/outline";
import { TrophyIcon, UsersIcon } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const congratulations = [
  {
    name: "Dilkumari Dura",
    message: "Got 39 out of 40, Passed EPS successfully!",
    image: "/Dilkumari Dura.jpg",
  },
  {
    name: "Gobinda Budhair",
    message: "Got 39 out of 40, Passed EPS successfully!",
    image: "/GobindaBudhair.jpg",
  },
  {
    name: "Bijay Tamang",
    message: "Got 40 out of 40, Passed EPS successfully!",
    image: "/BijayTamang.jpg",
  },
  {
    name: "Krishna Bhatta",
    message: "Got 38 out of 40, Passed EPS successfully!",
    image: "/KrishnaBhatta.jpg",
  },
];

const achievements = [
  { title: "Courses Completed", number: "1,500+", icon: AcademicCapIcon },
  { title: "Expert Instructors", number: "50+", icon: UsersIcon },
  { title: "Countries Reached", number: "30+", icon: GlobeAmericasIcon },
  { title: "Awards Won", number: "12+", icon: TrophyIcon },
];

// Motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AboutSuccess() {
  return (
    <section>
      {/* Achievements Section */}
      <motion.div
        className="mt-20 bg-blue-50 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-blue-900 mb-10 text-center"
          variants={itemVariants}
        >
          Our Achievements
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 container mx-auto px-4">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <Icon className="h-14 w-14 text-yellow-400 mb-3" />
                <span className="text-3xl font-bold text-blue-900 mb-1">
                  {item.number}
                </span>
                <p className="text-gray-700 font-semibold">{item.title}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Congratulations Section */}
      <motion.div
        className="mt-20 bg-white py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-blue-900 mb-10 text-center"
          variants={itemVariants}
        >
          Congratulations to Our Students!
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 container mx-auto px-4">
          {congratulations.map((student, index) => (
            <motion.div
              key={index}
              className="bg-blue-50 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={student.image}
                alt={student.name}
                className="w-56 h-48 object-cover rounded-lg mb-4 border-2 border-yellow-400"
              />
              <h3 className="text-xl font-semibold text-blue-900">
                {student.name}
              </h3>
              <p className="text-gray-700 mt-2">{student.message}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
