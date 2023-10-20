const MAX_LEVEL = 55;
const PLAYER_PRESTIGIOUS_LEVEL = 0;
const PLAYER_LEVEL = 1;

// Define an array of points required for each level (customize as needed)
const pointsPerLevel = [
  100,
  200,
  300,
  400,
  500, // Levels 1-5
  600,
  700,
  800,
  900,
  1000 // Levels 6-10
  // Continue adding points for levels 11-55 as needed
];

const quizModes = ['Blitz'];

const prestigiousLevelNames = [
  'Bronze',
  'Silver',
  'Gold',
  'Platinum',
  'Diamond',
  'Master',
  'Grandmaster'
];

export {
  MAX_LEVEL,
  pointsPerLevel,
  PLAYER_LEVEL,
  PLAYER_PRESTIGIOUS_LEVEL,
  prestigiousLevelNames,
  quizModes
};
