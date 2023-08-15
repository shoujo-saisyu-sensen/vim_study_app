import style from './styles.module.scss';
import { Question } from '@/constants/vimCommands';
import { useState } from 'react';
import { useQuestion } from '@/hooks/useQuestion';
import { useModeContext } from "@/context/useModeContext";

export const QuizInput: React.FC = () => {
  const { mode, setMode } = useModeContext();
  const { getNextCurrentQuestion } = useQuestion();
  const [selectedAnswer, setSelectedAnswer] = useState<string>();
  const [currentQuestion, setCurrentQuestion] = useState<Question>(getNextCurrentQuestion());


  const handleClickSelection = (value: string) => {
    setSelectedAnswer(value);
    setMode("answer");
  }

  const handleClickNext = () => {
    setSelectedAnswer(undefined);
    setMode("question");
  }

  const getQuestionsArea = () => {
    switch(mode){
      case 'answer':
        return (<div>{currentQuestion.answer}</div>);
      case 'question':
        return (<div>
          <p>{currentQuestion.question}</p>
          {currentQuestion.selection.map((answerValue) => (<button onClick={() => handleClickSelection(answerValue)}>{answerValue}</button>))}
        </div>);
      case 'complete':
        return <div>終わりー</div>
      // ケースとしては起こり得ない、何も返さない
      default:
        return;
    }
  }

  return (
    <div className={style.inputWrapper}>
      <div>
        {}
      </div>
    </div>
  );
};