import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ConsultancyHero() {
  return (
    <section className="relative h-[80vh] flex items-end pb-16">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#002452] via-[#002452]/50 to-transparent" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 w-full"
      >
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end w-full gap-6">
          {/* Left side: Heading & subheading */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
              Your Future,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
                Our Expertise
              </span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              Guiding students to top universities worldwide with expert
              counseling and proven success.
            </p>
          </motion.div>

          {/* Right side: Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex md:flex-col items-center justify-between   gap-4"
          >
            <Link to="/services">
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#002452] px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105">
                Explore Services
              </button>
            </Link>
            <Link to="/contact">
              <button className="group bg-yellow-400 hover:bg-yellow-500 text-[#002452] px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-3 shadow-lg">
                Get Free Consultation
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
