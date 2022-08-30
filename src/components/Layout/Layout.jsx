import { NavLink } from "react-router-dom";
import { Outlet } from 'react-router';
import style from './Layout.module.css';
import { CartNavigation } from "../CartNavigation/CartNavigation";
import { useContext } from "react";
import { PopUpContext } from "../../hoc/PopUpContext";
import { LoginButton } from "../LoginButton/LoginButton";
import { LoginForm } from "../LoginForm/LoginForm";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/selectors/userSelector";

const Layout = () => {
  const { isShowPopUp, setIsShowPopUp } = useContext(PopUpContext);
  const user = useSelector(userSelector);
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
            <NavLink
              className={(el) => el.isActive ? style.active : style.link}
              to={'/'}
            >Home</NavLink>
            <NavLink
              className={(el) => el.isActive ? style.active : style.link}
              to={'/aboutShop'}
            >About shop</NavLink>
          </nav>
          {user.isLogin ? <CartNavigation /> :
            <LoginButton handleClick={handlePopUp}>Login</LoginButton>}
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