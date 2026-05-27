import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-4xl mx-auto"
      >
        <div className="inline-block mb-4 p-2 magical-border bg-dark/50 backdrop-blur-sm">
          <span className="text-gold text-sm tracking-wider">⚡ The Seeker's Desk ⚡</span>
        </div>
        <h1 className="font-cinzel text-5xl md:text-7xl font-bold mb-4">
          Adivi <span className="text-gold glow-text">Ananya</span>
        </h1>
        <p className="text-xl md:text-2xl text-parchment/80 mb-6">
          Decoder of Patterns & Wizard of Predictive Spells
        </p>
        <div className="w-24 h-1 bg-gold mx-auto mb-8 rounded-full" />
        <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          <span className="text-gold font-semibold">"Accio insights!</span> – From messy data to meaningful predictions."
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-10 px-8 py-3 bg-gold text-dark font-bold rounded-full shadow-lg hover:shadow-gold/50 transition-all duration-300"
        >
          Send an Owl
        </motion.a>
      </motion.div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gold text-2xl">↓</a>
      </div>
    </section>
  );
};

export default Hero;