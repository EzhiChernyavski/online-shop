import cartImgWhite from "../../Icons/EmptyCart-white.svg";
import { useContext } from "react";
import { AppContext } from "../../hoc/AppContext";
import style from './AddCartButton.module.css';
import { SetAllPrice } from "../../Features/SetAllPrice";

export const AddCartButton = ({ price, countOfProduct, setCountOfProduct }) => {
  const { isLogin, setIsShowPopUp, currentUser, users, setUser } = useContext(AppContext);

  const handlePrice = () => {
    if(isLogin) {
      SetAllPrice(price, countOfProduct, currentUser, users, setUser)
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