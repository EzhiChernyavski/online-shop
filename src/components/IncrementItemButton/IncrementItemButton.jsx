import { useContext } from "react";
import { PopUpContext } from "../../hoc/PopUpContext";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, incrementQuantity } from "../../store/reducers/cartReducer";
import { cartSelector } from "../../store/selectors/cartSelector";
import { userSelector } from "../../store/selectors/userSelector";

export const IncrementItemButton = ({
  currentCountOfProduct,
  setCurrentCountOfProduct,
  product,
  children,
  className
}) => {
  const { setIsShowPopUp } = useContext(PopUpContext);
  const dispatch = useDispatch();
  const cart = useSelector(cartSelector);
  const user = useSelector(userSelector);


  const handleAddItem = () => {
    if (user.isLogin) {
      const isProduct = cart.products.some((item) => item.id === product.id);

      if (isProduct) {
        dispatch(incrementQuantity({
          ...product,
          currentCountOfProduct
        }))
      } else {
        dispatch(addToCart({
          ...product,
          currentCountOfProduct
        }));
      }

      if (currentCountOfProduct) {
        setCurrentCountOfProduct(``);
      }
    } else {
      setIsShowPopUp(true)
    }
  }

  return (
    <button
      className={className}
      onClick={handleAddItem}
    >
      {children}
    </button>
  );
};