import cartImgWhite from "../../Icons/EmptyCart-white.svg";
import { useContext } from "react";
import { AppContext } from "../../hoc/AppContext";
import style from './AddCartButton.module.css';
import { setAllPrice } from "../../Features/setAllPrice";

export const AddCartButton = ({ price, currentCountOfProduct, setCurrentCountOfProduct }) => {
  const { isLogin, setIsShowPopUp, setPrice, setCountOfProduct } = useContext(AppContext);

  const handlePrice = () => {
    if(isLogin) {
      setAllPrice(price, currentCountOfProduct, setPrice, setCountOfProduct)
      if (currentCountOfProduct) {
        setCurrentCountOfProduct(``);
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