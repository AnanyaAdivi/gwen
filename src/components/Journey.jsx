import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  { year: "2024-2028", title: "B.Tech CSE", org: "South Asian University", type: "education" },
  { year: "2025-Present", title: "PR Coordinator", org: "ACM Student Chapter", desc: "Managing outreach, events, and communications", type: "leadership" },
  { year: "2024-Present", title: "R&D Lead", org: "CSI SAU", desc: "Leading research initiatives and technical workshops", type: "leadership" },
];

const Journey = () => {
  return (
    <section id="journey" className="py-20 px-6 bg-dark/40">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-cinzel text-4xl md:text-5xl text-gold mb-4">The Marauder's Map</h2>
          <div className="w-20 h-0.5 bg-gold mx-auto" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gold/30 hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {timelineData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`relative md:flex items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
              >
                <div className="md:w-1/2 flex justify-center md:justify-end">
                  <div className="bg-dark/80 magical-border p-5 w-full max-w-md">
                    <span className="text-gold text-sm">{item.year}</span>
                    <h3 className="font-cinzel text-xl text-gold">{item.title}</h3>
                    <p className="text-parchment/80">{item.org}</p>
                    <p className="text-sm text-parchment/60 mt-2">{item.desc}</p>
                  </div>
                </div>
                <div className="hidden md:block w-8 h-8 rounded-full bg-gold border-4 border-dark absolute left-1/2 transform -translate-x-1/2" />
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;