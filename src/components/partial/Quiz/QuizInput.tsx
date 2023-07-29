import style from './styles.module.scss';

export const Top: React.FC = () => {
  return (
    <div className={style.inputWrapper}>
      <input type="text" className={style.input} placeholder='sample'/>
    </div>
  );
};