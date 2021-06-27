/*
The questions are hold in an array of objects. Every object keeps an array of objects with potential answers.
The boolean value determents if a answer is correct or not.
*/

export const questions = [
  {
    question: "how tall is james?",
    answer: [
      { answerText: "12m", isCorrect: false },
      { answerText: "14m", isCorrect: true },
      { answerText: "15m", isCorrect: false },
    ],
  },
];
