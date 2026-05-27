import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "NIDS with Explainability",
    subtitle: "The Unseen Detector",
    description: "Real-time Network Intrusion Detection System using CICIDS2017, XGBoost, and SHAP. Classifies 15 attack types with feature attribution dashboards.",
    tech: "Python, XGBoost, SHAP, Dash, Plotly, Wireshark",
    color: "from-emerald-900/40 to-dark",
  },
  {
    title: "Hostel Management System",
    subtitle: "The Great Hall Organiser",
    description: "DBMS project for room allocation, maintenance and student records. Ensures no student is left without a bed or a late-night snack.",
    tech: "MySQL, PHP (or Flask)",
    color: "from-gold-900/30 to-dark",
  },
  {
    title: "Directory Management in C",
    subtitle: "The Marauder's File Map",
    description: "Console-based system to create, search, and delete directories using linked lists. Taught me low-level memory sorcery.",
    tech: "C, Linked Lists, File I/O",
    color: "from-amber-900/30 to-dark",
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03, rotateY: 5 }}
      className="group perspective"
    >
      <div className="relative bg-gradient-to-br from-dark/90 to-black/80 magical-border p-6 h-full transition-all duration-300 hover:shadow-xl hover:shadow-gold/20">
        <div className="absolute top-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-20 transition">
          <div className="w-full h-full bg-gold rounded-bl-full" />
        </div>
        <h3 className="font-cinzel text-2xl text-gold mb-1">{project.title}</h3>
        <p className="text-sm text-parchment/60 mb-3 italic">— {project.subtitle}</p>
        <p className="text-parchment/80 mb-4 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.split(',').map((tech, i) => (
            <span key={i} className="text-xs px-2 py-1 bg-gold/10 rounded-full text-gold">
              {tech.trim()}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-cinzel text-4xl md:text-5xl text-gold mb-4">The Restricted Section</h2>
          <div className="w-20 h-0.5 bg-gold mx-auto" />
          <p className="mt-4 text-parchment/70 max-w-2xl mx-auto">
            Some of the Ancient spells I've conjured
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;