import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const features = [
  {
    number: "01",
    title: "Personalized Guidance",
    description:
      "Our consultants provide tailored advice to match your academic goals, career aspirations, and personal strengths.",
    icon: "🎯",
    img: "final/guidance.jpg",
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
    img: "final/visa.jpg",
  },
  {
    number: "04",
    title: "Scholarship Assistance",
    description:
      "We help identify and apply for scholarships, grants, and funding opportunities to make education more affordable.",
    icon: "💰",
    img: "final/scholar.jpg",
  },
  {
    number: "05",
    title: "Smooth Visa Process",
    description:
      "Our visa guidance ensures you have the correct documentation and meet all requirements without unnecessary stress.",
    icon: "✈️",
    img: "final/sVisa.jpg",
  },
  {
    number: "06",
    title: "Ongoing Support",
    description:
      "From pre-departure briefings to settling in abroad, we're with you every step of your educational journey.",
    icon: "🤝",
    img: "final/support.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
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

export default function HomeContact2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  // Create individual refs for each feature item
  const itemRef0 = useRef(null);
  const itemRef1 = useRef(null);
  const itemRef2 = useRef(null);
  const itemRef3 = useRef(null);
  const itemRef4 = useRef(null);
  const itemRef5 = useRef(null);

  // Create individual useInView hooks for each feature item
  const itemInView0 = useInView(itemRef0, {
    amount: 0.5,
    margin: "-20% 0px -20% 0px",
  });
  const itemInView1 = useInView(itemRef1, {
    amount: 0.5,
    margin: "-20% 0px -20% 0px",
  });
  const itemInView2 = useInView(itemRef2, {
    amount: 0.5,
    margin: "-20% 0px -20% 0px",
  });
  const itemInView3 = useInView(itemRef3, {
    amount: 0.5,
    margin: "-20% 0px -20% 0px",
  });
  const itemInView4 = useInView(itemRef4, {
    amount: 0.5,
    margin: "-20% 0px -20% 0px",
  });
  const itemInView5 = useInView(itemRef5, {
    amount: 0.5,
    margin: "-20% 0px -20% 0px",
  });

  const itemRefs = [itemRef0, itemRef1, itemRef2, itemRef3, itemRef4, itemRef5];
  const itemInViews = [
    itemInView0,
    itemInView1,
    itemInView2,
    itemInView3,
    itemInView4,
    itemInView5,
  ];

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="lg:sticky lg:top-8"
          >
            <motion.div
              variants={leftVariants}
              className="flex items-center justify-center sm:p-6 lg:pt-16 lg:sticky lg:top-0"
            >
              <div className="max-w-2xl text-left space-y-4 sm:space-y-6">
                <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl leading-tight text-gray-900">
                  Why choose <span className="text-blue-600">our</span>{" "}
                  educational{" "}
                  <span className="text-yellow-500">consultancy</span>?
                </h2>

                <p className="text-base sm:text-lg text-gray-600">
                  We guide students every step of the way—from choosing the
                  right course to securing admissions, scholarships, and
                  visas—ensuring a smooth path to academic success.
                </p>

                <Link to="/contact">
                  <button className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition text-sm sm:text-base">
                    Book a Free Consultation
                  </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
          {/* Features List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-0"
          >
            {features.map((feature, index) => {
              const itemRef = itemRefs[index];
              const itemInView = itemInViews[index];
              const isFirstOrLast =
                index === 0 || index === features.length - 1;

              return (
                <motion.div
                  key={index}
                  ref={itemRef}
                  initial={{ x: index % 2 === 0 ? -50 : 50 }}
                  animate={
                    isFirstOrLast || itemInView
                      ? {
                          x: 0,
                          transition: {
                            duration: 0.8,
                            ease: "easeOut",
                          },
                        }
                      : {
                          x: index % 2 === 0 ? -30 : 30,
                        }
                  }
                  className={`relative p-4 sm:p-6 flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Large background number */}
                  <motion.span
                    className="absolute top-1/2 transform -translate-y-1/2 text-6xl sm:text-8xl lg:text-[10rem] xl:text-[12rem] text-gray-100 font-bold select-none pointer-events-none"
                    animate={
                      isFirstOrLast || itemInView
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
                    className="relative z-10 max-w-sm sm:max-w-md"
                    animate={
                      isFirstOrLast || itemInView
                        ? {
                            scale: 1,
                            transition: { duration: 0.6, delay: 0.2 },
                          }
                        : {
                            scale: 0.95,
                          }
                    }
                  >
                    <motion.div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
                      {feature.icon}
                    </motion.div>

                    <motion.h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 mb-3 sm:mb-4">
                      {feature.title}
                    </motion.h3>

                    <motion.p className="text-gray-500 mb-3 sm:mb-4 text-base sm:text-lg leading-relaxed">
                      {feature.description}
                    </motion.p>

                    <motion.div className="mb-3 sm:mb-4">
                      <img
                        src={feature.img}
                        alt=""
                        className="w-full h-32 sm:h-40 lg:h-48 object-cover rounded-lg"
                      />
                    </motion.div>

                    <motion.div
                      className="w-12 sm:w-16 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"
                      animate={
                        isFirstOrLast || itemInView
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
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-8 sm:h-12 lg:h-16 bg-gradient-to-b from-gray-300 to-transparent"
                      animate={
                        isFirstOrLast || itemInView
                          ? {
                              scaleY: 1,
                              transition: { duration: 0.8, delay: 0.6 },
                            }
                          : {
                              scaleY: 0.5,
                            }
                      }
                      style={{ transformOrigin: "top" }}
                    />
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Map Section */}
        </div>
      </div>
    </section>
  );
}
