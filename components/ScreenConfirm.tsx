import React from 'react';
import { motion } from 'framer-motion';
import { ScreenProps } from '../types';
import { CheckCircle2 } from 'lucide-react';

export const ScreenConfirm: React.FC<ScreenProps> = ({ onNext }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="flex flex-col items-center gap-8 bg-white/60 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50"
    >
      <div className="p-4 bg-purple-100 rounded-full">
        <CheckCircle2 size={48} className="text-purple-600" />
      </div>

      <h2 className="text-3xl font-bold text-gray-800">
        Emin misin?
      </h2>

      <p className="text-gray-600 text-lg">
        Geri dönüş yok, barışıyoruz bak?
      </p>

      <div className="flex gap-4 w-full">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xl font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all"
        >
          Evet, eminim! 🚀
        </motion.button>
      </div>
    </motion.div>
  );
};