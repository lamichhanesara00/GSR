import React from "react";
import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="relative h-[80vh] flex items-end pb-16">
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Get in Touch with Us
            </h1>
            <p className="text-lg md:text-2xl mb-6">
              Have questions or need support? We guide you at every step to help
              you achieve your study abroad dreams.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
