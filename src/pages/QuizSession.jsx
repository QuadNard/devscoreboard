import Modal from '../components/ui/Modal';
import Header from '../components/ui/Header';
import usePlayerState from '../services/state/Store';
import useBlitzModeData from '../hooks/useBlitzQuiz';
import { db } from '../services/db/Firebase';
import { getRandomQuestions } from '../utils/getRandomQuestions';

function QuizSession(props) {
  const { level, prestigiousLevel } = usePlayerState();

  // Fetch database questions
  const blitzModeData = useBlitzModeData(db);

  // Randomly choose x number of questions (2 in this situation) from an array (the database in this situation)
  const randomQuestions = getRandomQuestions(blitzModeData, 2);

  console.log(randomQuestions);
  console.log(blitzModeData);
  return (
    <div className="flex min-h-screen flex-col">
      <Header playerLevel={level} prestige={prestigiousLevel} />
      <Modal />
    </div>
  );
}

export default QuizSession;
