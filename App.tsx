import React, { useState } from 'react';
import { GameStep } from './types';
import { Layout } from './components/Layout';
import { ScreenStart } from './components/ScreenStart';
import { ScreenConfirm } from './components/ScreenConfirm';
import { ScreenUnlock } from './components/ScreenUnlock';
import { ScreenFinal } from './components/ScreenFinal';
import { AnimatePresence, motion } from 'framer-motion';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<GameStep>(GameStep.START);

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const resetGame = () => {
    setCurrentStep(GameStep.START);
  };

  // Render the correct component based on step
  const renderScreen = () => {
    switch (currentStep) {
      case GameStep.START:
        return <ScreenStart key="start" onNext={nextStep} />;
      case GameStep.CONFIRM:
        return <ScreenConfirm key="confirm" onNext={nextStep} />;
      case GameStep.UNLOCK:
        return <ScreenUnlock key="unlock" onNext={nextStep} />;
      case GameStep.FINAL:
        return <ScreenFinal key="final" onNext={nextStep} onReset={resetGame} />;
      default:
        return <ScreenStart key="default" onNext={nextStep} />;
    }
  };

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="w-full flex justify-center"
        >
          {renderScreen()}
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
};

export default App;