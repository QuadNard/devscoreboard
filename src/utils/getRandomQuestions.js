// Function to shuffle an array using the Fisher-Yates algorithm
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    // Swap elements at indices i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
};

// Function to get a random subset of questions from the provided array (allQuestions)
export const getRandomQuestions = (allQuestions, numberOfQuestions) => {
  // Makes a copy of the array to avoid modifying the original array
  let shuffledQuestions = [...allQuestions];
  // Shuffle the array using the shuffleArray function
  shuffleArray(shuffledQuestions);
  // Return the first numberOfQuestions elements
  return shuffledQuestions.slice(0, numberOfQuestions);
};
