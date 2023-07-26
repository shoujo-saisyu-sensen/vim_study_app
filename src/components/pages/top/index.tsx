import { useState } from 'react';
import style from './styles.module.scss';

export const Top: React.FC = () => {
  const [isStarted, setIsStarted] = useState<boolean>(false);

  const onClickStart = () => {
    setIsStarted(true);
  }

  return (
    <div>
      <div className={style.topWrapper}>
        {isStarted ? (<input type="text" className={style.answerInput} placeholder='sample'/>) : (
        <div className={style.start}>
          <button onClick={onClickStart} className={style.button}>始める</button>
        </div>)}
      </ div>
    </div>
  );
};