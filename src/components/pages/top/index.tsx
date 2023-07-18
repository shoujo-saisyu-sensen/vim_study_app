import { useState } from 'react';
import style from './styles.module.scss';

export const Top: React.FC = () => {
  const [isStarted, setIsStarted] = useState<boolean>(false);

  const onClickStart = () => {
    setIsStarted(true);
  }

  return (
    <div>
      <div className={`w-screen h-screen flex flex-col justify-center gap-4 p-40 ${style.topWrapper}`}>
        {isStarted ? (<input type="text" className={style.answerInput} placeholder='sample'/>) : (
        <div>
          <p>START</p>
          <button onClick={onClickStart} className={style.start}>おしてね</button>
        </div>)}
      </ div>
    </div>
  );
};