import React from 'react';
import { motion } from 'framer-motion';
import { ScreenProps } from '../types';
import { LockKeyholeOpen } from 'lucide-react';

export const ScreenUnlock: React.FC<ScreenProps> = ({ onNext }) => {
  return (
    <motion.div 
      className="flex flex-col items-center gap-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-2xl font-semibold text-gray-700">
        Son bir adım kaldı...
      </h2>

      <motion.button
        onClick={onNext}
        whileHover={{ scale: 1.05, rotate: [0, -2, 2, -2, 0] }}
        whileTap={{ scale: 0.9 }}
        className="group relative flex flex-col items-center justify-center w-48 h-48 bg-white rounded-full shadow-2xl border-4 border-yellow-400 hover:border-yellow-500 transition-colors"
      >
        <div className="absolute inset-0 rounded-full bg-yellow-100 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
        
        <LockKeyholeOpen size={64} className="text-yellow-500 mb-2 z-10" />
        <span className="text-xl font-bold text-gray-700 z-10">Kilidi Aç</span>
      </motion.button>
    </motion.div>
  );
};