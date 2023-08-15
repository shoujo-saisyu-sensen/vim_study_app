import { useState, useMemo } from "react";
import { VIM_QUESTIONS } from "@/constants/vimCommands";

export const useQuestion = () => {
  const [questionIndex, setQuestionIndex] = useState<number>(0);

  const currentQuestion = useMemo(() => {
    const targetQuestion = VIM_QUESTIONS[questionIndex];
    setQuestionIndex(questionIndex + 1);
    return targetQuestion;
  }, [questionIndex]);

  return {
    currentQuestion,
  };
};
