import style from './styles.module.scss';
import { useModeContext } from "@/context/useModeContext";
import { QuizInput } from '@/components/partial/Quiz/QuizInput';

export const Top: React.FC = () => {
  const { mode, setMode } = useModeContext();

  const handleClickStart = () => {
    setMode('question');
  }

  return (
    <div>
      <div className={style.topWrapper}>
        {mode === 'top' ? (
        <div className={style.start}>
          <button onClick={handleClickStart} className={style.button}>始める</button>
        </div>) : (<QuizInput />)}
      </ div>
    </div>
  );
};