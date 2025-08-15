import React from "react";
import { motion } from "framer-motion";
import { Users, BookOpen, FileText, Globe } from "lucide-react";
import { BsAirplane } from "react-icons/bs";

const stepImages = [
  "/services/cosuslation.jpg",
  "/services/uni.jpg",
  "/services/application.jpg",
  "/services/visaapproval.jpg",
  "/services/departure.jpg",
];

const steps = [
  {
    id: 1,
    title: "Career Counseling",
    description: `Our experienced counselors discuss your interests, career goals, and academic aspirations. 
    We help you choose the best path for studying in Japan and answer all your queries about courses and universities.`,
    icon: Users,
  },
  {
    id: 2,
    title: "Course & University Selection",
    description: `We assist you in shortlisting universities and courses based on your profile, budget, and preferences. 
    You get personalized advice to choose the program that fits your goals and increases your chances of admission.`,
    icon: BookOpen,
  },
  {
    id: 3,
    title: "Application & Documentation",
    description: `We guide you in preparing and submitting all necessary documents, including academic transcripts, recommendation letters, and application forms. 
    Our team ensures that your application is complete, accurate, and submitted on time.`,
    icon: FileText,
  },
  {
    id: 4,
    title: "Visa & Approval",
    description: `Once admission is confirmed, we provide step-by-step assistance with the student visa application, including document verification and submission. 
    We help you track your application until you receive the visa approval.`,
    icon: Globe,
  },
  {
    id: 5,
    title: "Pre-Departure Orientation",
    description: `Before your departure, we conduct orientation sessions covering Japanese culture, academic expectations, housing, banking, and essential life skills. 
    This ensures you are well-prepared and confident to start your journey in Japan.`,
    icon: BsAirplane,
  },
];

export default function StudentProcessWithImages() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center mb-12"
      >
        <h2 className="text-5xl font-bold text-blue-900 mb-4">
          Step-by-Step Application Process
        </h2>
        <p className="text-gray-700 text-lg">
          From initial counseling to boarding the plane, we guide you at every
          step to make your study abroad journey smooth.
        </p>
      </motion.div>

      <div className="space-y-20 max-w-6xl mx-auto">
        {steps.map((step, index) => {
          const isLeft = index % 2 === 0;
          const Icon = step.icon;

          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2, // Stagger effect
              }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="md:w-1/2"
              >
                <img
                  src={stepImages[index]}
                  alt={step.title}
                  className="rounded-2xl shadow-lg w-full object-cover"
                />
              </motion.div>

              {/* Step Content */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                viewport={{ once: true }}
                className="md:w-1/2 p-4 text-center md:text-left"
              >
                <div className="flex items-center justify-center md:justify-start mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-md text-xl font-bold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-semibold text-blue-900 ml-4">{`${step.id}. ${step.title}`}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
