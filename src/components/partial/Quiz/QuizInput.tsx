import style from './styles.module.scss';
import { useMode } from '@/hooks/useMode';
import { Question } from '@/constants/vimCommands';
import { useState } from 'react';
import { useQuestion } from '@/hooks/useQuestion';

export const QuizInput: React.FC = () => {
  const { mode, changeMode } = useMode();
  const { getNextCurrentQuestion } = useQuestion();
  const [selectedAnswer, setSelectedAnswer] = useState<string>();
  const [currentQuestion, setCurrentQuestion] = useState<Question>(getNextCurrentQuestion());


  const handleClickSelection = (value: string) => {
    setSelectedAnswer(value);
    changeMode();
  }

  const handleClickNext = () => {
    setSelectedAnswer(undefined);
    changeMode();
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