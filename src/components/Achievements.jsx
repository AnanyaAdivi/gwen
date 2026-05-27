import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
  { title: "To be added", description: "You can add certifications or awards here later", icon: "🏅" },
  { title: "To be added", description: "e.g., AWS Cloud Practitioner, CTF finalist", icon: "📜" },
  { title: "To be added", description: "Feel free to edit this section", icon: "⚡" },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-cinzel text-4xl md:text-5xl text-gold mb-4">The Order of Merit</h2>
          <div className="w-20 h-0.5 bg-gold mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 magical-border bg-dark/40"
            >
              <div className="text-5xl mb-3">{item.icon}</div>
              <h3 className="font-cinzel text-xl text-gold mb-2">{item.title}</h3>
              <p className="text-parchment/70 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;