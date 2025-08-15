import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ServicesHero() {
  return (
    <section className="relative h-[80vh] flex items-end pb-16 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('Aboutvision.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#002452] via-[#002452]/50 to-white/0" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end w-full gap-6">
          {/* Left side: Heading & paragraph */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-white max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              We provide top-quality consulting services to help you achieve
              your goals. From planning to execution, we’re your trusted
              partner.
            </p>
          </motion.div>

          {/* Right side: Button */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Link to="/contact">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all">
                Contact Us
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
