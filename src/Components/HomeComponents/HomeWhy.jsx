import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { img } from "motion/react-client";

export default function HomeWhy() {
  const sectionRef = useRef(null);
  const rightSectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: rightSectionRef,
    offset: ["start end", "end start"],
  });

  const features = [
    {
      number: "01",
      title: "Personalized Guidance",
      description:
        "Our consultants provide tailored advice to match your academic goals, career aspirations, and personal strengths.",
      icon: "🎯",
      img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&auto=format&fit=crop&q=60",
    },
    {
      number: "02",
      title: "Expert Knowledge",
      description:
        "Benefit from years of experience and insider knowledge about universities, courses, and admission processes worldwide.",
      icon: "👩‍🏫",
      img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=900&auto=format&fit=crop&q=60",
    },
    {
      number: "03",
      title: "Application Support",
      description:
        "Get end-to-end assistance in preparing, refining, and submitting your applications for the best chances of success.",
      icon: "📝",
      img: "https://images.unsplash.com/photo-1522202195461-377ffcf1c62f?w=900&auto=format&fit=crop&q=60",
    },
    {
      number: "04",
      title: "Scholarship Assistance",
      description:
        "We help identify and apply for scholarships, grants, and funding opportunities to make education more affordable.",
      icon: "💰",
      img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&auto=format&fit=crop&q=60",
    },
    {
      number: "05",
      title: "Smooth Visa Process",
      description:
        "Our visa guidance ensures you have the correct documentation and meet all requirements without unnecessary stress.",
      icon: "✈️",
      img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&auto=format&fit=crop&q=60",
    },
    {
      number: "06",
      title: "Ongoing Support",
      description:
        "From pre-departure briefings to settling in abroad, we’re with you every step of your educational journey.",
      icon: "🤝",
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&auto=format&fit=crop&q=60",
    },
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

  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={sectionRef} className="h-scren overflow-hidden bg-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto h-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          {/* Left Side - Sticky */}
          <motion.div
            variants={leftVariants}
            className="flex items-center justify-center p-8 lg:sticky lg:top-0 lg:h-"
          >
            <div className="max-w-2xl space-y-6">
              <h2 className="font-extrabold text-4xl lg:text-7xl leading-tight text-gray-900">
                Why choose <span className="text-blue-600">our</span>{" "}
                educational <span className="text-yellow-500">consultancy</span>
                ?
              </h2>

              <p className="text-lg text-gray-600">
                We guide students every step of the way—from choosing the right
                course to securing admissions, scholarships, and visas—ensuring
                a smooth path to academic success.
              </p>

              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition">
                Book a Free Consultation
              </button>
            </div>
          </motion.div>

          {/* Right Side - Scrollable */}
          <div className="relative overflow-y-auto h-scren">
            <motion.div
              ref={rightSectionRef}
              className="py-16 px-4 space-y-16"
              style={{
                height: `${features.length * 20}vh`, // Make it scrollable
              }}
            >
              {features.map((feature, index) => {
                // Create individual scroll progress for each item
                const itemRef = useRef(null);
                const itemInView = useInView(itemRef, {
                  amount: 0.5,
                  margin: "-20% 0px -20% 0px",
                });

                return (
                  <motion.div
                    key={index}
                    ref={itemRef}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={
                      itemInView
                        ? {
                            opacity: 1,
                            x: 0,
                            transition: {
                              duration: 0.8,
                              ease: "easeOut",
                            },
                          }
                        : {
                            opacity: 0.3,
                            x: index % 2 === 0 ? -30 : 30,
                          }
                    }
                    className={`relative p-6 flex min-h- items-center ${
                      index % 2 === 0 ? "justify-start" : "justify-end"
                    }`}
                  >
                    {/* Large background number */}
                    <motion.span
                      className="absolute top-1/2 transform -translate-y-1/2 text-[8rem] lg:text-[12rem] text-gray-100 font-bold select-none pointer-events-none"
                      animate={
                        itemInView
                          ? {
                              scale: 1,
                              rotate: 0,
                              transition: { duration: 1, ease: "easeOut" },
                            }
                          : {
                              scale: 0.8,
                              rotate: index % 2 === 0 ? -10 : 10,
                            }
                      }
                      style={{
                        left: index % 2 === 0 ? "10%" : "auto",
                        right: index % 2 === 0 ? "auto" : "10%",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </motion.span>

                    {/* Content */}
                    <motion.div
                      className="relative z-10 max-w-md"
                      animate={
                        itemInView
                          ? {
                              y: 0,
                              scale: 1,
                              transition: { duration: 0.6, delay: 0.2 },
                            }
                          : {
                              y: 20,
                              scale: 0.95,
                            }
                      }
                    >
                      <motion.div
                        className="text-4xl mb-4"
                        // animate={
                        //   itemInView
                        //     ? {
                        //         rotate: [0, 10, -10, 0],
                        //         transition: { duration: 0.6, delay: 0.4 },
                        //       }
                        //     : {}
                        // }
                      >
                        {feature.icon}
                      </motion.div>

                      <motion.h3
                        className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-4"
                        animate={
                          itemInView
                            ? {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.5, delay: 0.3 },
                              }
                            : {
                                opacity: 0.7,
                                y: 10,
                              }
                        }
                      >
                        {feature.title}
                      </motion.h3>

                      <motion.p
                        className="text-gray-500 mb-4 text-lg leading-relaxed"
                        animate={
                          itemInView
                            ? {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.5, delay: 0.4 },
                              }
                            : {
                                opacity: 0.5,
                                y: 15,
                              }
                        }
                      >
                        {feature.description}
                      </motion.p>
                      <motion.p
                        className="text-gray-500 mb-4 text-lg leading-relaxed"
                        animate={
                          itemInView
                            ? {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.5, delay: 0.4 },
                              }
                            : {
                                opacity: 0.5,
                                y: 15,
                              }
                        }
                      >
                        <img src={feature.img} alt="" />
                      </motion.p>

                      <motion.div
                        className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"
                        animate={
                          itemInView
                            ? {
                                scaleX: 1,
                                transition: { duration: 0.8, delay: 0.5 },
                              }
                            : {
                                scaleX: 0,
                              }
                        }
                        style={{ transformOrigin: "left" }}
                      />
                    </motion.div>

                    {/* Connecting line for visual flow */}
                    {index < features.length - 1 && (
                      <motion.div
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-gray-300 to-transparent"
                        animate={
                          itemInView
                            ? {
                                opacity: 1,
                                scaleY: 1,
                                transition: { duration: 0.8, delay: 0.6 },
                              }
                            : {
                                opacity: 0.3,
                                scaleY: 0.5,
                              }
                        }
                        style={{ transformOrigin: "top" }}
                      />
                    )}
                  </motion.div>
                );
              })}

              {/* Bottom spacing */}
              <div className="h-32" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
