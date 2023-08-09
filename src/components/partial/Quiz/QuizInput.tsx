import style from './styles.module.scss';
import { useMode } from '@/hooks/useMode';
import { VIM_COMMANDS } from '@/constants/vimCommands';
import { useState } from 'react';

export const Top: React.FC = () => {
  const { mode, changeMode } = useMode();

  const [selectedAnswer, setSelectedAnswer] = useState<string>();

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
      {VIM_COMMANDS.map(({ question, answer, selection }) => {
        return (
          <div>
            {mode === 'answer' ? (<p>{answer}</p>) : (<div>
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
        )
      })}
    </div>
  );
};