import { useContext } from "react";
import { PopUpContext } from "../../hoc/PopUpContext";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, incrementQuantity } from "../../store/reducers/cartReducer";
import { cartSelector } from "../../store/selectors/cartSelector";
import { userSelector } from "../../store/selectors/userSelector";

export const AddItemButton = ({
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

      //Checking the product in the cart
      const quantity = cart.products.some((item) => item.id === product.id);
      //-------

      //Dispatches depend on currentCountOfProduct & quantity
      if (!currentCountOfProduct) {
        quantity ? dispatch(incrementQuantity(product)) : dispatch(addToCart(product));
      } else {
        quantity ? (
          dispatch(incrementQuantity({
            product,
            currentCountOfProduct
          }))) : (
          dispatch(addToCart({ product, currentCountOfProduct }))
        );
      }
      //----------

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