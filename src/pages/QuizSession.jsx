
import Modal from '../components/ui/Modal';
import Header from '../components/ui/Header';
import usePlayerState from '../services/state/Store';
import useBlitzModeData from '../hooks/useBlitzQuiz';
import { db } from '../services/db/Firebase'

function QuizSession(props) {
  const { level, prestigiousLevel } = usePlayerState();

   const blitzModeData = useBlitzModeData(db);

   console.log(blitzModeData);
  return (
    <div className="flex min-h-screen flex-col">
      <Header playerLevel={level} prestige={prestigiousLevel} />
      <Modal />
    </div>
  );
}

export default QuizSession;
