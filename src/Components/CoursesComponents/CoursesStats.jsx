import { Award, Star, TrendingUp, Users } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function CoursesStats() {
  const [counters, setCounters] = useState({
    students: 0,
    experience: 0,
    successRate: 0,
    institutions: 0,
  });

  const stats = [
    {
      number: "500+",
      label: "Students Guided",
      icon: Users,
      color: "from-yellow-500 to-yellow-600",
      finalValue: 500,
      key: "students",
    },
    {
      number: "15+",
      label: "Years Experience",
      icon: Award,
      color: "from-yellow-500 to-yellow-600",
      finalValue: 15,
      key: "experience",
    },
    {
      number: "95%",
      label: "Success Rate",
      icon: TrendingUp,
      color: "from-yellow-500 to-yellow-600",
      finalValue: 95,
      key: "successRate",
    },
    {
      number: "50+",
      label: "Partner Institutions",
      icon: Star,
      color: "from-yellow-500 to-yellow-600",
      finalValue: 50,
      key: "institutions",
    },
  ];

  // Ref for the section
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return; // Only start when in view

    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    stats.forEach((stat) => {
      let currentValue = 0;
      const increment = stat.finalValue / steps;

      const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= stat.finalValue) {
          currentValue = stat.finalValue;
          clearInterval(timer);
        }

        setCounters((prev) => ({
          ...prev,
          [stat.key]: Math.floor(currentValue),
        }));
      }, stepTime);
    });
  }, [isInView]);

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
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
    <div ref={ref} className="container mx-auto space-y-16 py-16 px-4">
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="group  text-slate-900 rounded-2xl p-4 md:p-6 text-center  hover:scale-105 transition-all duration-500 cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div
              className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}
            >
              <stat.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
            </div>

            <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 font-mono">
              {stat.key === "students" && `${counters.students}+`}
              {stat.key === "experience" && `${counters.experience}+`}
              {stat.key === "successRate" && `${counters.successRate}%`}
              {stat.key === "institutions" && `${counters.institutions}+`}
            </div>

            <div className="text-slate-900 text-xs md:text-sm font-medium transition-colors">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
