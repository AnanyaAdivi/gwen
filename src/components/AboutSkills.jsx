import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: "Machine Learning", category: "Divination" },
  { name: "Data Science & Analytics", category: "Ancient Runes" },
  { name: "Predictive Modeling", category: "Prophecy" },
  { name: "Python Ecosystem", category: "Potions" },
  { name: "Data Visualization", category: "Pensieve" },
  { name: "Research & Experimentation", category: "Restricted Section" },
  { name: "React & Interactive UI", category: "Alohomora" },
  { name: "Networking Fundamentals", category: "Marauder's Map" },
];

const AboutSkills = () => {
  return (
    <section id="about" className="py-20 px-6 bg-dark/60 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-cinzel text-4xl md:text-5xl text-gold mb-4">The Pensieve of Purpose</h2>
          <div className="w-20 h-0.5 bg-gold mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-cinzel text-gold">Who I am</h3>
            <p className="leading-relaxed">
              I’m a second-year CSE undergraduate at South Asian University driven by curiosity for machine learning, data science, and research-oriented innovation. I build projects that merge analytical thinking with immersive design — crafting experiences that are both intelligent and visually compelling. Alongside development, I lead R&D at CSI SAU and coordinate PR for ACM.
            </p>
            <p className="leading-relaxed">
              My research interests lie in machine learning, data science, and intelligent systems, where hidden patterns and complex systems become opportunities for discovery. I believe in open knowledge and the power of 
        <span className="text-gold"> lumos </span> 
         to illuminate the unseen corners of technology through research, curiosity, and innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-cinzel text-gold mb-4">Magical Abilities</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="px-4 py-2 magical-border bg-dark/40 hover:bg-gold/20 transition-all duration-300 group"
                >
                  <span className="text-parchment group-hover:text-gold">{skill.name}</span>
                  <span className="text-xs text-gold/60 ml-2">({skill.category})</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSkills;