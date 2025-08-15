import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";

const CountUp = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const HeroSection = () => {
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

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -30,
      y: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      x: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.8,
      },
    },
  };

  return (
    <div
      className="min-h-screen bg-[#002452] relative overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0,36,82,0.95) 0%, rgba(0,36,82,0.95) 60%, rgba(0,36,82,0.7) 100%),
          ('homehero.jpg')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center right",
      }}
    >
      {/* Grid Lines */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
            linear-gradient(90deg, transparent 0%, transparent calc(20% - 1px), white calc(20% - 1px), white calc(20% + 1px), transparent calc(20% + 1px)),
            linear-gradient(90deg, transparent 0%, transparent calc(40% - 1px), white calc(40% - 1px), white calc(40% + 1px), transparent calc(40% + 1px)),
            linear-gradient(90deg, transparent 0%, transparent calc(60% - 1px), white calc(60% - 1px), white calc(60% + 1px), transparent calc(60% + 1px)),
            linear-gradient(90deg, transparent 0%, transparent calc(80% - 1px), white calc(80% - 1px), white calc(80% + 1px), transparent calc(80% + 1px))
          `,
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-white"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            >
              GSR Educational Academy
              <br />
              {/* <motion.span variants={itemVariants}>platform for</motion.span>
              <br />
              <motion.span variants={itemVariants} className="text-yellow-400">
                education.
              </motion.span> */}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg lg:text-xl text-blue-100 mb-8 max-w-lg"
            >
              We provide consistent and reliable educational opportunities for
              learners worldwide, empowering students to achieve their academic
              and professional goals with expert guidance and personalized
              support.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-500 hover:bg-yellow-500 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-200 flex items-center gap-2"
                >
                  Learn More
                </motion.button>
              </Link>

              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 text-white font-semibold px-6 py-4 hover:text-yellow-400 transition-colors duration-200 border border-white/20 rounded-full hover:border-yellow-400"
              >
                How it works
                <Play className="w-5 h-5 fill-current" />
              </motion.button> */}
            </motion.div>

            {/* Stats Section - Left Side Only */}
            <motion.div
              variants={statsVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-3 gap-8"
            >
              <div className="text-left">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  <CountUp end={260} suffix="+" />
                </div>
                <div className="text-blue-200 font-medium border-b-2 border-yellow-400 pb-1 inline-block">
                  Tutors
                </div>
              </div>

              <div className="text-left">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  <CountUp end={5340} suffix="+" />
                </div>
                <div className="text-blue-200 font-medium border-b-2 border-yellow-400 pb-1 inline-block">
                  Students
                </div>
              </div>

              <div className="text-left">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  <CountUp end={280} suffix="+" />
                </div>
                <div className="text-blue-200 font-medium border-b-2 border-yellow-400 pb-1 inline-block">
                  Courses
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image - Hidden on mobile, shown on desktop */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative hidn lg:block"
          >
            <div className="relative z-10">
              <img
                src="hero.jpg"
                alt="Happy student"
                className="w-full max-w-lg mx-auto rounded-4xl shadow-2xl"
              />
            </div>

            {/* Decorative yellow element */}
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-yellow-400 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -top-10 right-20 w-24 h-24 bg-yellow-400 rounded-full opacity-30 blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
