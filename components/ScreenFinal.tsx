import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { ScreenProps } from '../types';
import { Copy, RefreshCw, Heart } from 'lucide-react';

export const ScreenFinal: React.FC<ScreenProps> = ({ onReset }) => {
  const [copied, setCopied] = useState(false);

  const finalMessage = "Son zamanlarda aramız biraz gergindi biliyorum ama seni gerçekten önemsiyorum. Konuşup aramızdaki şeyi düzeltmek isterim. Çünkü arkadaşlığımız benim için değerli. ❤️";

  useEffect(() => {
    // Fire confetti on mount
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(finalMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", bounce: 0.5 }}
      className="bg-white/80 backdrop-blur-md p-6 md:p-10 rounded-3xl shadow-2xl border border-pink-200 max-w-md w-full"
    >
      <div className="flex justify-center mb-6">
         <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
         >
            <Heart size={64} className="text-red-500 fill-current" />
         </motion.div>
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mb-6 font-[Pacifico]">
        Yaşasın! Barıştık! 🎉
      </h2>

      <div className="bg-pink-50 p-6 rounded-xl border border-pink-100 mb-8 text-left relative">
        <p className="text-gray-700 leading-relaxed font-medium">
          {finalMessage}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleCopy}
          className={`flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-white transition-all ${
            copied ? 'bg-green-500' : 'bg-pink-500 hover:bg-pink-600'
          }`}
        >
          {copied ? (
            <>Kopyalandı! ✨</>
          ) : (
            <>
              <Copy size={20} />
              Mesajı Kopyala
            </>
          )}
        </motion.button>

        {onReset && (
          <button
            onClick={onReset}
            className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-gray-500 hover:bg-gray-100 transition-colors"
          >
            <RefreshCw size={18} />
            Tekrar Oyna
          </button>
        )}
      </div>
    </motion.div>
  );
};