import style from './styles.module.scss';
import { useMode } from '@/hooks/useMode';
import { VIM_COMMANDS } from '@/constants/vimCommands';

export const Top: React.FC = () => {
  const { mode, changeMode } = useMode();

  return (
    <div className={style.inputWrapper}>
      {VIM_COMMANDS.map(({ question, answer, selection }) => {
        return (
          <div>
            <p>{question}</p>
            {selection.map((value) => {
              return (
                <div>
                  <p>{value}</p>
                </div>
              )
            })}
          </div>
        )
      })}
      {mode === 'answer' ? (<input type="text" className={style.input} placeholder='sample'/>) : (<div></div>)}
    </div>
  );
};