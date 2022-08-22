import cartImgWhite from "../../Icons/EmptyCart-white.svg";
import { useContext } from "react";
import { AppContext } from "../../hoc/AppContext";
import style from './AddCartButton.module.css';

export const AddCartButton = ({ price, countOfProduct, setCountOfProduct }) => {
  const { setAllPrice, isLogin, setIsShowPopUp, currentUser } = useContext(AppContext);

  const handlePrice = () => {

    if(isLogin) {
      setAllPrice(price, countOfProduct, currentUser)
      if (countOfProduct) {
        setCountOfProduct(``)
      }
    } else {
      setIsShowPopUp(true)
    }
  }

  return (
    <button
      className={style.addCart}
      onClick={handlePrice}
    >
      <img
        src={cartImgWhite}
        alt='cartImgWhite'
        className={style.cart}
      />
    </button>

  );
};