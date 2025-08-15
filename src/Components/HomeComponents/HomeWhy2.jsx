import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const contactInfo = [
  {
    id: 1,
    title: "Phone",
    details: ["+1 (555) 123-4567", "+1 (555) 765-4321"],
    icon: "📞",
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Email",
    details: ["info@company.com", "support@company.com"],
    icon: "📧",
    color: "bg-green-500",
  },
  {
    id: 3,
    title: "Address",
    details: ["123 Business Street", "Suite 100, City, State 12345"],
    icon: "📍",
    color: "bg-orange-500",
  },
  {
    id: 4,
    title: "Business Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
    icon: "🕒",
    color: "bg-purple-500",
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

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
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

const ContactCard = ({ info }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 group"
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      <div
        className={`w-12 h-12 ${info.color} rounded-lg flex items-center justify-center text-white text-xl mb-4 group-hover:scale-110 transition-transform duration-300`}
      >
        {info.icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-3">{info.title}</h3>
      <div className="space-y-2">
        {info.details.map((detail, index) => (
          <p key={index} className="text-gray-600 text-sm">
            {detail}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

export default function HomeWhy2() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Visit Us
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get in touch with us today. We're here to help you with all your
            needs and answer any questions you may have.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Get In Touch
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We'd love to hear from you. Send us a message and we'll respond
                as soon as possible.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info) => (
                <ContactCard key={info.id} info={info} />
              ))}
            </div>

            {/* Contact Form */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 mt-8"
            >
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Send us a Message
              </h4>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    whileFocus={{ scale: 1.02 }}
                  />
                  <motion.input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>
                <motion.input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 shadow-lg"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="lg:sticky lg:top-8"
          >
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Find Us Here
              </h3>

              {/* Embedded Map */}
              <div className="relative overflow-hidden rounded-lg shadow-md">
                <motion.div
                  className="w-full h-96"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.3812174932073!2d85.31685772585128!3d27.705513676183635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19075849239d%3A0x4ddaddd1271c3890!2sBagbazar%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1755078094051!5m2!1sen!2snp"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  />
                </motion.div>
              </div>

              {/* Location Details */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Our Location
                </h4>
                <p className="text-gray-600 text-sm mb-2">
                  123 Business Street, Suite 100
                </p>
                <p className="text-gray-600 text-sm mb-3">
                  BagBazar, Putalisadak
                </p>
                {/* <div className="flex items-center text-sm text-blue-600">
                  <span className="mr-2">🚇</span>
                  <span>Accessible by subway and bus</span>
                </div> */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
