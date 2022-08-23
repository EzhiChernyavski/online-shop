import style from './Error.module.css';
import close from './../../Icons/close.svg'


export const Error = ({error}) => {
    return (
    <div className={style.errorWrapper}>
      <img className={style.close} src={close} alt='close'/>
      <h3 className={style.title}>An error has occurred!</h3>
        <p>{error}</p>
    </div>
  );
};

