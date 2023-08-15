import { useMemo } from 'react'
import style from './styles.module.scss';
import { Question } from '@/constants/vimCommands';
import { useState } from 'react';
import { useQuestion } from '@/hooks/useQuestion';
import { useModeContext } from "@/context/useModeContext";

export const QuizInput: React.FC = () => {
  const { mode, setMode } = useModeContext();
  // const { currentQuestion } = useQuestion();
  const [selectedAnswer, setSelectedAnswer] = useState<string>();


  // const handleClickSelection = (value: string) => {
  //   setSelectedAnswer(value);
  //   setMode("answer");
  // }

  // const handleClickNext = () => {
  //   setSelectedAnswer(undefined);
  //   setMode("question");
  // }

  // const getQuestionsArea = useMemo(() => {
  //   switch(mode){
  //     case 'answer':
  //       return (<div>{currentQuestion.answer}</div>);
  //     case 'question':
  //       return (<div>
  //         <p>{currentQuestion.question}</p>
  //         {currentQuestion.selection.map((answerValue) => (<button key={answerValue} onClick={() => handleClickSelection(answerValue)}>{answerValue}</button>))}
  //       </div>);
  //     case 'complete':
  //       return <div>終わりー</div>
  //     // ケースとしては起こり得ない、何も返さない
  //     default:
  //       return;
  //   }
  // }, [])

  return (
    <div className={style.inputWrapper}>
      <div>
        <p>{'a'}</p>
      </div>
    </div>
  );
};