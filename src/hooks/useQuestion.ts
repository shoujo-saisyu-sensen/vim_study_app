import { useState } from "react";
import { VIM_QUESTIONS } from "@/constants/vimCommands";

export const useQuestion = () => {
  const [questionIndex, setQuestionIndex] = useState<number>(0);

  const getNextCurrentQuestion = () => {
    const targetQuestion = VIM_COMMANDS[questionIndex];
    setQuestionIndex(questionIndex + 1);
    return targetQuestion;
  };

  return {
    getNextCurrentQuestion,
  };
};
