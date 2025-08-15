import React from "react";
import { motion } from "framer-motion";

export default function AboutVision() {
  const benefits = [
    {
      number: "01",
      title: "Learn with Expert Instructors",
      description:
        "Our courses are taught by industry-leading experts to give you the best learning experience.",
      icon: "👨‍🏫",
      img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=900&auto=format&fit=crop&q=60",
    },
    {
      number: "02",
      title: "Top Instructors Make Learning Easy",
      description:
        "Learn from professionals who guide you step-by-step and simplify complex topics.",
      icon: "📘",
      img: "https://images.unsplash.com/photo-1522202195461-377ffcf1c62f?w=900&auto=format&fit=crop&q=60",
    },
    {
      number: "03",
      title: "Smooth Visa & Application Process",
      description:
        "Get step-by-step guidance to complete your applications and visa requirements efficiently and stress-free.",
      icon: "✈️",
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&auto=format&fit=crop&q=60",
    },
    {
      number: "04",
      title: "Ongoing Student Support",
      description:
        "From pre-departure briefings to settling in abroad, we provide assistance at every step of the journey.",
      icon: "🤝",
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-24 relative overflow-hidden">
      <motion.div
        className=" flex flex-col  text-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.span
          className="text-yellow-500 font-semibold tracking-wide uppercase text-sm"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Why Choose Us?
        </motion.span>

        <motion.h2
          className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Teaching Makes You Productive
        </motion.h2>
      </motion.div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
        {/* Left side: Circular Image with animated background */}
        <div className="md:w-1/2 relative flex justify-center items-center">
          {/* Background Circle 1 */}
          <motion.div
            className="absolute hidden md:block rounded-full w-72 h-72 md:w-96 md:h-96 -left-12 -top-12 overflow-hidden z-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src="/Aboutvision.jpg"
              alt="Background 1"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Background Circle 2 */}
          <motion.div
            className="absolute hidden md:block rounded-full w-48 h-48 md:w-64 md:h-64 -right-12 -bottom-22 overflow-hidden z-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src="/Aboutvision.jpg"
              alt="Background 2"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Main Image */}
          <motion.img
            src="/Aboutvision.jpg"
            alt="Student Learning"
            className="relative z-10 w-120 h-72 md:w-80 md:h-80 object-cover md:rounded-full shadow-2xl md:border-8 md:border-gray-100"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              duration: 0.8,
              delay: 0.4,
            }}
            viewport={{ once: true, amount: 0.3 }}
          />
        </div>

        {/* Right side: Text content */}
        <motion.div
          className="md:w-1/2 flex flex-col gap-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex flex-col gap-6 mt-8">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-start gap-4 border-l-4 border-yellow-400 hover:shadow-2xl hover:-translate-y-2 transition-transform duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <span className="text-yellow-400 font-bold text-3xl md:text-4xl flex-shrink-0">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 hover:text-yellow-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-2 md:mt-1">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
