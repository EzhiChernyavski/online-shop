import { NavLink } from "react-router-dom";
import { Outlet } from 'react-router';
import style from './Layout.module.css';
import { AppContext } from "../../hoc/AppContext";
import { useContext } from "react";
import cartImg from '../../Icons/EmptyCart.svg'

const Layout = () => {

  const { price, countOfProducts } = useContext(AppContext);

  return (
    <>
      <header>
        <div className={style.wrapper}>
          <nav>
            {/*разобраться с передачей стилей линкам*/}
            <NavLink
              className={(el) => el.isActive ? style.active : style.link}
              to={'/'}
            >Home</NavLink>
            <NavLink
              className={(el) => el.isActive ? style.active : style.link}
              to={'/aboutShop'}
            >About shop</NavLink>
          </nav>
          <div className={style.cart}>
            <img
              className={style.cartImg}
              src={cartImg}
              alt='cartImg'
            />
            <p>{countOfProducts}</p>
            <p className={style.price}>${price}</p>
          </div>
        </div>
      </header>
      <div className={style.container}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;