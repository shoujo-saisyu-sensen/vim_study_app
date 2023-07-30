import style from './styles.module.scss';
import { useMode } from '@/hooks/useMode';

export const Top: React.FC = () => {
  const { mode, changeMode } = useMode();

  return (
    <div className={style.inputWrapper}>
      {mode === 'answer' ? (<input type="text" className={style.input} placeholder='sample'/>) : (<div></div>)}
    </div>
  );
};