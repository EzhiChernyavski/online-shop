import { NavLink } from "react-router-dom";
import { Outlet } from 'react-router';
import style from './Layout.module.css';
import { Cart } from "../Cart/Cart";
import { useContext } from "react";
import { AppContext } from "../../hoc/AppContext";
import { LoginButton } from "../LoginButton/LoginButton";
import { LoginForm } from "../LoginForm/LoginForm";

const Layout = () => {
  const { isLogin, isShowPopUp, setIsShowPopUp } = useContext(AppContext);

  const handlePopUp = (event) => {
    event.preventDefault();
    if (!isShowPopUp) {
      setIsShowPopUp(true);
    }
  }

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
          {isLogin ? <Cart /> : <LoginButton handleClick={handlePopUp}>Login</LoginButton>}

        </div>
        {isShowPopUp && <LoginForm />}
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;