import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    number: "01",
    title: "One-on-One Career Counseling",
    description:
      "Personalized guidance to help students choose the right academic or professional path based on their interests and goals.",
    icon: "💬",
    color: "bg-blue-600",
  },
  {
    id: 2,
    number: "02",
    title: "Japanese Language Training (JLPT/NAT)",
    description:
      "Certified training programs from N5 to N1 level, focused on clearing JLPT, NAT, and language exams required for Japanese institutions.",
    icon: "📄",
    color: "bg-teal-600",
  },
  {
    id: 3,
    number: "03",
    title: "University & College Admissions Support",
    description:
      "Complete support with documentation, application forms, essays, and communication with Japanese schools and universities.",
    icon: "🎓",
    color: "bg-orange-600",
  },
  {
    id: 4,
    number: "04",
    title: "Specified Skilled Worker (SSW) Program Prep",
    description:
      "Special coaching for SSW candidates including language, skills, and interview preparation tailored to Japan's labor market.",
    icon: "💻",
    color: "bg-purple-600",
  },
  // {
  //   id: 5,
  //   number: "05",
  //   title: "Internship & Work Experience Placement",
  //   description:
  //     "Assist students and professionals in finding internships or work opportunities in Japan to gain practical experience.",
  //   icon: "🏢",
  //   color: "bg-green-600",
  // },
  // {
  //   id: 6,
  //   number: "06",
  //   title: "Cultural Orientation & Adaptation",
  //   description:
  //     "Workshops and guidance to help students and workers adapt to Japanese culture, etiquette, and workplace norms.",
  //   icon: "🌸",
  //   color: "bg-pink-600",
  // },
  // {
  //   id: 7,
  //   number: "07",
  //   title: "Visa & Immigration Assistance",
  //   description:
  //     "Support with visa applications, documentation, and compliance with Japanese immigration requirements.",
  //   icon: "🛂",
  //   color: "bg-yellow-600",
  // },
  // {
  //   id: 8,
  //   number: "08",
  //   title: "Career Advancement & Job Placement",
  //   description:
  //     "Guidance on career growth, resume building, interview preparation, and placement in relevant Japanese companies.",
  //   icon: "🚀",
  //   color: "bg-red-600",
  // },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl border border-gray-100 group cursor-pointer relative overflow-hidden"
      whileHover={{
        scale: 1.02,
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      {/* Number badge */}
      <div
        className={`absolute top-6 right-6 w-10 h-10 ${service.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}
      >
        {service.number}
      </div>

      {/* Icon */}
      <div
        className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl mb-6`}
      >
        {service.icon}
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight">
        {service.title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
};

export default function HomeServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Our Core Services
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of educational services designed to
            empower your learning journey and unlock your full potential.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="text-center flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link to="/services">
            <motion.button
              className="border border-yellow-500  px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(249, 115, 22, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Other Services
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
