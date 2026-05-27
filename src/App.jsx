import React, { useEffect } from 'react';
import StarBackground from './components/StarBackground';
import Hero from './components/Hero';
import AboutSkills from './components/AboutSkills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Patronus from './components/Patronus';
import { useState } from 'react';
import DatasetSortingHat from './components/DatasetSortingHat';
function App() {
  const [isDatasetSortingHatOpen, setIsDatasetSortingHatOpen] = useState(false);

  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      const hash = target.getAttribute('href');
      if (hash === '#') return;
      const element = document.querySelector(hash);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="relative">
      <StarBackground />
      <Hero />
      <AboutSkills />
      <Projects />
      <Journey />
      {/* <Achievements /> */}
      <Contact />
      <Footer />
      <Patronus />
      {/* <DatasetSortingHat /> */}
    </div>
  );
}

export default App;