import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DatasetSortingHat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [targetType, setTargetType] = useState('categorical');
  const [dataSize, setDataSize] = useState('medium');
  const [result, setResult] = useState(null);

  const getAlgorithmSuggestion = () => {
    if (targetType === 'categorical') {
      if (dataSize === 'small') return 'Logistic Regression (simple, interpretable)';
      if (dataSize === 'medium') return 'Random Forest or XGBoost';
      return 'Neural Network (with regularization / dropout)';
    } else {
      if (dataSize === 'small') return 'Linear Regression';
      if (dataSize === 'medium') return 'Gradient Boosting (LightGBM / XGBoost)';
      return 'Deep Learning (MLP / Transformer)';
    }
  };

  const handleSuggest = () => {
    const suggestion = getAlgorithmSuggestion();
    setResult(suggestion);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 left-4 z-50 bg-dark/80 magical-border p-3 rounded-full hover:scale-110 transition-transform"
        aria-label="Dataset Sorting Hat"
      >
        🧙‍♂️📊
      </button>

      {/* Widget panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-32 left-4 z-50 bg-dark/90 magical-border p-5 rounded-lg w-72 backdrop-blur-sm"
          >
            <h3 className="text-gold font-cinzel text-lg mb-2">Dataset Sorting Hat</h3>
            <p className="text-xs text-parchment/60 mb-4">
              Tell me about your data → I'll suggest an ML algorithm
            </p>

            <div className="mb-3">
              <label className="text-sm text-parchment block mb-1">Target variable type?</label>
              <select
                value={targetType}
                onChange={(e) => setTargetType(e.target.value)}
                className="w-full p-2 bg-dark/80 border border-gold/30 rounded text-parchment focus:outline-none focus:border-gold"
              >
                <option value="categorical">Categorical (Classification)</option>
                <option value="continuous">Continuous (Regression)</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="text-sm text-parchment block mb-1">Dataset size?</label>
              <select
                value={dataSize}
                onChange={(e) => setDataSize(e.target.value)}
                className="w-full p-2 bg-dark/80 border border-gold/30 rounded text-parchment focus:outline-none focus:border-gold"
              >
                <option value="small">Small (&lt; 1,000 samples)</option>
                <option value="medium">Medium (1k – 100k samples)</option>
                <option value="large">Large (&gt; 100k samples)</option>
              </select>
            </div>

            <button
              onClick={handleSuggest}
              className="w-full bg-gold text-dark font-bold py-2 rounded-full hover:shadow-lg transition"
            >
              Reveal Spell
            </button>

            {result && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="mt-4 p-3 bg-dark/60 rounded-lg border border-gold/50"
              >
                <p className="text-gold text-sm font-semibold">✨ Recommended Algorithm:</p>
                <p className="text-parchment text-sm mt-1">{result}</p>
                <button
                  onClick={() => setResult(null)}
                  className="text-xs text-parchment/40 hover:text-gold mt-2"
                >
                  Dismiss
                </button>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DatasetSortingHat;