import React from 'react';
import Modal from '../components/ui/Modal';
import Header from '../components/ui/Header';
import usePlayerState from '../services/state/Store';

function QuizSession(props) {
  const { level, prestigiousLevel } = usePlayerState();

  console.log(props.selectedQuizMode);
  return (
    <div className="flex min-h-screen flex-col">
      <Header playerLevel={level} prestige={prestigiousLevel} />
      <Modal />
    </div>
  );
}

export default QuizSession;
