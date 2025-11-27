import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ScreenProps } from '../types';

export const ScreenStart: React.FC<ScreenProps> = ({ onNext }) => {
  const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Function to move button to random position
  const moveButton = () => {
    // Calculate available space (safe zone within viewport)
    // We assume the button wrapper is relative to the screen center, 
    // so we generate large offsets to make it jump around the screen.
    
    const x = (Math.random() - 0.5) * 500; // -250 to 250 px range X
    const y = (Math.random() - 0.5) * 600; // -300 to 300 px range Y
    
    setNoBtnPosition({ x, y });
    setIsHovered(true);
  };

  return (
    <div className="flex flex-col items-center gap-12">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 neon-text"
        style={{ fontFamily: "'Pacifico', cursive" }}
      >
        Benimle barışmak ister misin?
      </motion.h1>

      <div className="flex flex-col md:flex-row gap-6 items-center justify-center relative w-full h-40">
        {/* YES Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="px-8 py-4 bg-green-500 text-white text-xl font-bold rounded-full shadow-lg hover:bg-green-600 transition-colors z-20"
        >
          Evet! 😊
        </motion.button>

        {/* NO Button (Runaway) */}
        <motion.button
          animate={{ x: noBtnPosition.x, y: noBtnPosition.y }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          onMouseEnter={moveButton}
          onTouchStart={moveButton} // Mobile support
          onClick={moveButton} // Fallback
          className="px-8 py-4 bg-red-500 text-white text-xl font-bold rounded-full shadow-lg cursor-not-allowed absolute md:static"
          style={{ 
            position: isHovered ? 'absolute' : 'relative',
            zIndex: 10
          }}
        >
          Hayır ❌
        </motion.button>
      </div>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2 }}
        className="text-sm text-gray-500 mt-12"
      >
        (İpucu: Kırmızı butonu yakalamak zor olabilir 😈)
      </motion.p>
    </div>
  );
};