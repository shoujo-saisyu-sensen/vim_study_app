import style from './styles.module.scss';
import { useMode } from '@/hooks/useMode';
import { VIM_QUESTIONS } from '@/constants/vimCommands';
import { useState } from 'react';
import { useQuestion } from '@/hooks/useQuestion';

export const QuizInput: React.FC = () => {
  const { mode, changeMode } = useMode();
  const { getNextCurrentQuestion } = useQuestion();
  const [selectedAnswer, setSelectedAnswer] = useState<string>();
const [currentQuestion, setCurrentQuestion] = useState<>();


  const handleClickSelection = (value: string) => {
    setSelectedAnswer(value);
    changeMode();
  }

  const handleClickNext = () => {
    setSelectedAnswer(undefined);
    changeMode();
  }

  return (
    <div className={style.inputWrapper}>
      <div>
        {mode === 'answer' ? (<div>
          <p>{answer}</p>
        </div>) : (<div>
        <p>{question}</p>
        {selection.map((value) => {
          return (
            <div>
              <button onClick={() => handleClickSelection(value)}>{value}</button>
            </div>
          )
        })}
      </div>)}
      </div>
    </div>
  );
};