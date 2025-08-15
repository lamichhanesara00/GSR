import React from "react";
import { motion } from "framer-motion";

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
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ContactCard = ({ info }) => (
  <motion.div
    variants={itemVariants}
    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 group"
    whileHover={{ scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }}
  >
    <div
      className={`w-12 h-12 shadow-xl rounded-lg flex items-center justify-center text-white text-xl mb-4 group-hover:scale-110 transition-transform duration-300`}
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

export default function HomeContact() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
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

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left: Contact Cards */}
          <motion.div className="space-y-6">
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
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="lg:sticky lg:top-8"
          >
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Find Us Here
              </h3>
              <div className="relative overflow-hidden rounded-lg shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.3812174932073!2d85.31685772585128!3d27.705513676183635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19075849239d%3A0x4ddaddd1271c3890!2sBagbazar%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1755078094051!5m2!1sen!2snp"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
