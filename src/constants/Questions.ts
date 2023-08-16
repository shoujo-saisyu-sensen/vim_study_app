export type Question = {
  question: string;
  explanation: string;
  answer: string;
  selection: Array<string>;
};

export const QUESTIONS: Array<Question> = [
  {
    question: "文字入力にするためには？",
    explanation: "インサートモードのiが正解です",
    answer: "i",
    selection: ["a", "i", "u", "e"],
  },
  {
    question: "ノーマルモードにするためには？",
    explanation: "escが正解です",
    answer: "esc",
    selection: ["esc", "delete", "shift", "control"],
  },
];
