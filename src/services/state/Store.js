import { create } from 'zustand';
import {
  PLAYER_LEVEL,
  PLAYER_PRESTIGIOUS_LEVEL,
  MAX_LEVEL,
  prestigiousLevelNames,
  pointsPerLevel,
  quizModes
} from '../../utils/contants';

const usePlayerState = create((set) => ({
  hasQuizStarted: false,
  level: PLAYER_LEVEL,
  experience: 0,
  prestigiousLevel: PLAYER_PRESTIGIOUS_LEVEL,
  prestigiousLevelName: prestigiousLevelNames[0],
  selectedQuizMode: quizModes[0],
  blitzMode: {
    totalSets: 4,
    questionsPerSet: 6,
    currentSet: 1,
    currentQuestion: 1
  },
  earnXP: (xp) => set((state) => ({ experience: state.experience + xp })),
  setQuizMode: (mode) => set({ selectedQuizMode: mode }),
  selectQuizMode: (mode) => {
    set({ selectedQuizMode: mode });
  },
  getQuizModes: () => quizModes,
  levelUp: () => {
    set((state) => {
      const currentLevel = state.level;
      const nextLevel = currentLevel + 1;

      if (
        nextLevel <= MAX_LEVEL &&
        state.experience >= pointsPerLevel[nextLevel - 1]
      ) {
        return {
          level: nextLevel,
          experience: state.experience - pointsPerLevel[nextLevel - 1]
        };
      } else if (nextLevel > MAX_LEVEL) {
        // Reset player level, increase prestigious level, and update the prestigious level name
        const nextPrestigiousLevel = state.prestigiousLevel + 1;
        const nextPrestigiousLevelName =
          prestigiousLevelNames[nextPrestigiousLevel] ||
          prestigiousLevelNames[prestigiousLevelNames.length - 1];

        return {
          level: PLAYER_LEVEL,
          experience: 0,
          prestigiousLevel: nextPrestigiousLevel,
          prestigiousLevelName: nextPrestigiousLevelName
        };
      }
      return state; // If the player can't level up, return the current state
    });
  },
  resetQuiz: () => {
    return {
      hasQuizStarted: false,
      level: PLAYER_LEVEL,
      experience: 0,
      prestigiousLevel: PLAYER_PRESTIGIOUS_LEVEL,
      prestigiousLevelName: prestigiousLevelNames[0]
    };
  },
  startQuiz: () => {
    set({
      hasQuizStarted: true,
      blitzMode: {
        totalSets: 4,
        questionsPerSet: 6,
        currentSet: 1,
        currentQuestion: 1
      }
    });
  }
}));

export default usePlayerState;
