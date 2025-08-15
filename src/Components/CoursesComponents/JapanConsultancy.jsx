import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Users,
  Star,
  Globe,
  TrendingUp,
  Heart,
  CheckCircle,
} from "lucide-react";

// General benefits (not country-specific)
const generalBenefits = [
  {
    icon: Star,
    title: "World-Class Education System",
    description:
      "Access top-quality education programs with internationally recognized degrees and advanced research facilities.",
    color: "text-yellow-500",
  },
  {
    icon: TrendingUp,
    title: "Strong Job Prospects",
    description:
      "Gain opportunities for career growth and placements in global companies across diverse sectors.",
    color: "text-green-500",
  },
  {
    icon: Globe,
    title: "Global Cultural Exposure",
    description:
      "Experience international culture and practices while enhancing your global perspective and communication skills.",
    color: "text-blue-500",
  },
  {
    icon: CheckCircle,
    title: "Scholarship & Financial Aid",
    description:
      "Benefit from scholarships and financial aid programs designed for international students.",
    color: "text-purple-500",
  },
  {
    icon: Heart,
    title: "Safe & Supportive Environment",
    description:
      "Study in a safe, welcoming, and student-friendly environment for a stress-free experience.",
    color: "text-red-500",
  },
  {
    icon: TrendingUp,
    title: "Innovation & Skill Development",
    description:
      "Participate in programs that boost your skills in technology, business, research, and other emerging fields.",
    color: "text-indigo-500",
  },
];

// General offerings for consultancy
const offerings = [
  {
    icon: Users,
    title: "Career Counseling & Test Prep",
    description:
      "Personalized guidance from our expert team with coaching for IELTS, TOEFL, SAT, GRE, and more.",
    benefit:
      "We help you choose the right path, plan effectively, and prepare for all required exams.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: CheckCircle,
    title: "Proven Track Record",
    description:
      "Hundreds of successful student placements in top universities worldwide.",
    benefit:
      "High success rate ensures you achieve your educational and career goals with confidence.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Heart,
    title: "End-to-End Support",
    description:
      "Continuous assistance from initial counseling to departure and adaptation.",
    benefit:
      "Personalized support throughout your journey ensures a smooth, stress-free experience.",
    color: "from-purple-500 to-purple-600",
  },
];

export default function CoursesConsultancy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <div className="flex justify-center items-center mb-4">
              <GraduationCap className="h-12 w-12 text-red-600 mr-3" />
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                Global Courses & Consultancy
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for pursuing higher education and career growth worldwide. 
              We guide students through every step of their international study journey.
            </p>
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Benefits of Choosing Our Programs
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Gain a competitive advantage through quality education, skill development, and global exposure.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {generalBenefits.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <item.icon className={`h-6 w-6 mt-1 ${item.color}`} />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Offerings Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="bg-blue-900 rounded-2xl shadow-xl text-white p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Why Choose Us
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                With years of experience and hundreds of successful student placements worldwide, we provide expert guidance at every step.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {offerings.map((item, index) => (
                <div
                  key={index}
                  className="text-center bg-blue-800 border border-white/20 rounded-xl p-6 shadow-lg"
                >
                  <div
                    className={`bg-gradient-to-br ${item.color} rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6`}
                  >
                    <item.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="opacity-90 mb-2">{item.description}</p>
                  <p className="opacity-70 italic">{item.benefit}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                Start Your Global Learning Journey
              </button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
