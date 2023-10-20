/* 
MYSQL Schema Example -

Blitz Mode: [
    totalSets -> relation to Categories which has relation to questions 4 sets
    questionsPerSet: 6,
]
Categories: [
    Javascript -> relation to questions
    React -> relation to questions
    HTML -> relation to questions
    CSS -> relation to questions
]
Questions: [
    Javascript: [
            {
            question: 'What is the capital of France?',
            choices: ['Paris', 'London', 'Berlin', 'Madrid'],
            correctAnswer: 'Paris'
            },
            etc...
    ],
    etc...[],
]

50 / 4 = 12.5 -> 6 questions per set
*/
