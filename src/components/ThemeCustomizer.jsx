import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeCustomizer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [accentColor, setAccentColor] = useState('#c9a03d');
  const [starColor, setStarColor] = useState('255, 215, 150');

  // Apply CSS variables to document root
  useEffect(() => {
    document.documentElement.style.setProperty('--custom-gold', accentColor);
    document.documentElement.style.setProperty('--custom-star', starColor);
  }, [accentColor, starColor]);

  const colorOptions = [
    { name: 'Gold', value: '#c9a03d', star: '255, 215, 150' },
    { name: 'Ruby', value: '#e63946', star: '230, 57, 70' },
    { name: 'Emerald', value: '#2ecc71', star: '46, 204, 113' },
    { name: 'Sapphire', value: '#3498db', star: '52, 152, 219' },
    { name: 'Amethyst', value: '#9b59b6', star: '155, 89, 182' },
  ];

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-4 z-50 bg-dark/80 magical-border p-3 rounded-full hover:scale-110 transition-transform"
        aria-label="Potion Mixer"
      >
        🧪
      </button>

      {/* Customizer panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed bottom-32 right-4 z-50 bg-dark/90 magical-border p-4 rounded-lg w-64 backdrop-blur-sm"
          >
            <h3 className="text-gold font-cinzel text-lg mb-3">Potion Mixer</h3>
            <p className="text-xs text-parchment/60 mb-3">Choose your magical aura</p>
            <div className="flex gap-2 flex-wrap">
              {colorOptions.map((color) => (
                <button
                  key={color.name}
                  onClick={() => {
                    setAccentColor(color.value);
                    setStarColor(color.star);
                  }}
                  className="w-8 h-8 rounded-full border-2 border-parchment/30 hover:scale-110 transition-transform"
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                />
              ))}
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-3 text-xs text-parchment/50 hover:text-gold w-full text-center"
            >
              Close Cauldron
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ThemeCustomizer;