export type Question = {
  question: string;
  explanation: string;
  answer: string;
  selection: Array<string>;
};

export const VIM_QUESTIONS: Array<Question> = [
  {
    question: "文字入力にするためには？",
    explanation: "test",
    answer: "i",
    selection: ["a", "i", "u", "e"],
  },
];
