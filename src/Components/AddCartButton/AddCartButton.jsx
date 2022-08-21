import cartImgWhite from "../../Icons/EmptyCart-white.svg";
import { useContext } from "react";
import { AppContext } from "../../hoc/AppContext";
import style from './AddCartButton.module.css';

export const AddCartButton = ({ price, countOfProduct, setCountOfProduct }) => {
  const { setAllPrice } = useContext(AppContext);

  const handlePrice = () => {
    setAllPrice(price, countOfProduct)
    if (countOfProduct) {
      setCountOfProduct(``)
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