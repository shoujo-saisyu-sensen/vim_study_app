import style from './styles.module.scss';

export const Top: React.FC = () => {
  return (
    <div>
      <div className={`w-screen h-screen ${style.topWrapper}`}>
      <h1>Hello World</ h1>
      <input type="text" />
    </ div>
    </div>
  );
};