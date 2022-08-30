import style from './Error.module.css';
import close from '../../icons/close.svg'
import { useEffect, useState } from "react";


export const Error = ({ error }) => {
  let timerId = null;
  const [isError, setIsError] = useState(true);

  const closeErrorPopUp = () => {
    if(isError) {
      setIsError(false)
    }
  }

  useEffect(() => {
    timerId = setTimeout(closeErrorPopUp, 15000)
    return () => {
      clearTimeout(timerId)
    }
  }, [])


  return (
    isError &&
    <div className={style.errorWrapper}>
      <img
        className={style.close}
        src={close}
        alt='close'
        onClick={closeErrorPopUp}
      />
      <h3 className={style.title}>An error has occurred!</h3>
      <p>{error}</p>
    </div>
  );
};

