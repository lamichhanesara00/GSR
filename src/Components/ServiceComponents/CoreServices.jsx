import React from "react";
import { motion } from "framer-motion";
import {
  FaUserTie,
  FaLanguage,
  FaUniversity,
  FaChalkboardTeacher,
  FaBriefcase,
  FaGlobeAsia,
  FaPassport,
  FaChartLine
} from "react-icons/fa";

const services = [
  {
    icon: <FaUserTie color="#fff" />,
    title: "One-on-One Career Counseling",
    description:
      "Personalized guidance to help students choose the right academic or professional path based on their interests and goals.",
    points: ["Personal Assessment", "Career Planning", "Goal Setting", "95% Pass Rate"],
    bgColor: "#2E86C1"
  },
  {
    icon: <FaLanguage color="#fff" />,
    title: "Japanese Language Training",
    description:
      "Certified training programs from N5 to N1 level, focused on clearing JLPT, NAT, and language exams required for Japanese institutions.",
    points: ["JLPT Preparation", "NAT Training", "Speaking Practice", "200+ Admissions"],
    bgColor: "#E67E22"
  },
  {
    icon: <FaUniversity color="#fff" />,
    title: "University Admissions Support",
    description:
      "Complete support with documentation, application forms, essays, and communication with Japanese schools and universities.",
    points: ["Application Prep", "Essay Writing", "School Communication", "85% Success Rate"],
    bgColor: "#9B59B6"
  },
  {
    icon: <FaChalkboardTeacher color="#fff" />,
    title: "SSW Program Preparation",
    description:
      "Special coaching for SSW candidates including language, skills, and interview preparation tailored to Japan's labor market.",
    points: ["Skill Development", "Interview Prep", "Market Analysis", "150+ Placements"],
    bgColor: "#27AE60"
  },
  {
    icon: <FaBriefcase color="#fff" />,
    title: "Internship Placement",
    description:
      "Assist students and professionals in finding internships or work opportunities in Japan to gain practical experience.",
    points: ["Opportunity Matching", "Company Connections", "Experience Guidance", "Cultural Mastery"],
    bgColor: "#34495E"
  },
  {
    icon: <FaGlobeAsia color="#fff" />,
    title: "Cultural Orientation",
    description:
      "Workshops and guidance to help students and workers adapt to Japanese culture, etiquette, and workplace norms.",
    points: ["Cultural Training", "Etiquette Classes", "Adaptation Support", "99% Approval Rate"],
    bgColor: "#F39C12"
  },
  {
    icon: <FaPassport color="#fff" />,
    title: "Visa & Immigration Assistance",
    description:
      "Support with visa applications, documentation, and compliance with Japanese immigration requirements.",
    points: ["Visa Processing", "Documentation", "Compliance Support"],
    bgColor: "#C0392B"
  },
  {
    icon: <FaChartLine color="#fff" />,
    title: "Career Growth+",
    description:
      "Guidance on career growth, resume building, interview preparation, and placement in relevant Japanese companies.",
    points: ["Resume Building", "Interview Skills", "Job Placement"],
    bgColor: "#16A085"
  }
];

// Slide-up animation for the card
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, type: "spring", stiffness: 70 }
  })
};

// Slide-up animation for the points
const pointVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, type: "tween" }
  })
};

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-gray-900 text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Discover Our Services
        </motion.h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              style={{ backgroundColor: service.bgColor }}
            >
              {/* Icon */}
              <motion.div
                className="text-5xl mb-5"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {service.icon}
              </motion.div>

              {/* Title */}
              <motion.h3
                className="text-2xl font-bold mb-3 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {service.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                className="text-white mb-5 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {service.description}
              </motion.p>

              {/* Points */}
              <ul className="list-disc list-inside text-white space-y-1">
                {service.points.map((point, i) => (
                  <motion.li
                    key={i}
                    custom={i}
                    variants={pointVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
