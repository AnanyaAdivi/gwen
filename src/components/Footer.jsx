import React, { useState } from 'react';

const Footer = () => {
  const [house, setHouse] = useState(null);

  const sortingHat = () => {
    const houses = [
      { name: "Gryffindor", message: "You boldly try any model, even if it overfits!" },
      { name: "Hufflepuff", message: "You always split your data with patience and fairness." },
      { name: "Ravenclaw", message: "You read research papers for fun – and understand them!" },
      { name: "Slytherin", message: "You'd find the perfect learning rate on your first try." },
      { name: "Gryffindor", message: "You're not afraid to debug at 2 AM – that's courage!" },
      { name: "Hufflepuff", message: "You clean datasets no one else wants – true dedication." },
      { name: "Ravenclaw", message: "You actually enjoy hyperparameter tuning." },
      { name: "Slytherin", message: "You'd build an ensemble that beats everyone else." },
    ];
    const random = houses[Math.floor(Math.random() * houses.length)];
    setHouse(random);
  };

  return (
    <footer className="py-8 text-center text-parchment/50 text-sm relative">
      <div className="max-w-4xl mx-auto px-4">
        {/* Sorting Hat button with label and tooltip */}
        <div className="flex flex-col items-center gap-2 mb-4">
          <button
            onClick={sortingHat}
            className="text-5xl cursor-pointer hover:scale-110 transition-transform animate-pulse hover:animate-none"
            aria-label="Sorting Hat – click to discover your Hogwarts house"
            title="Click me! I'll sort you into a Hogwarts house 🧙"
          >
            🧙‍♂️
          </button>
          <span className="text-xs text-gold/70 bg-dark/50 px-3 py-1 rounded-full magical-border">
            👆 Click the Sorting Hat!
          </span>
        </div>

        {/* Message popup */}
        {house && (
          <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-dark/90 border border-gold p-4 rounded-lg shadow-xl z-50 w-80 text-center">
            <p className="text-gold font-bold">{house.name}!</p>
            <p className="text-xs text-parchment/80">{house.message}</p>
            <button 
              onClick={() => setHouse(null)} 
              className="mt-2 text-xs text-parchment/50 hover:text-gold transition"
            >
              Dismiss
            </button>
          </div>
        )}

        <p>© {new Date().getFullYear()} Adivi Ananya – The Runes & Revelations Grimoire</p>
        <p className="text-xs mt-2">"Do not pity the dead, pity the living — and above all, those who live without magic."</p>
      </div>
    </footer>
  );
};

export default Footer;