import React from 'react';

import usePlayerState from './services/state/Store';
import TitleScreenOverlay from './components/ui/TitleScreenOverlay';
import { AnimatePresence } from 'framer-motion';
import QuizSession from './pages/QuizSession';

function App() {
  const {
    hasQuizStarted,
    startQuiz,
    getQuizModes,
    selectedQuizMode,
    selectQuizMode
  } = usePlayerState();

  const handleStartQuiz = () => {
    startQuiz();
  };

  if (hasQuizStarted) {
    console.log('the quiz is in session');
  }

  return (
    <main className="overflow-hidden">
      <AnimatePresence>
        {!hasQuizStarted && (
          <TitleScreenOverlay
            handleStartQuiz={handleStartQuiz}
            getQuizModes={getQuizModes}
            selectedQuizMode={selectedQuizMode}
            selectQuizMode={selectQuizMode}
          />
        )}
      </AnimatePresence>

      <div className="relative">
        <AnimatePresence>
          {hasQuizStarted ? (
            <QuizSession selectedQuizMode={selectedQuizMode} />
          ) : (
            <p>Error </p>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

export default App;
