import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { userSelector } from "../store/selectors/userSelector";


export const RequireAuth = ({ children }) => {
  const user = useSelector(userSelector)

  if (!user.isLogin) {
    return <Navigate to='/' />
  }

  return children;
}