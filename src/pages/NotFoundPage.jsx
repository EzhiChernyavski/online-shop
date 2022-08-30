import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <h1>Something went wrong. This page does not exist!</h1>
      <Link to='/'>HOME</Link>
    </div>
  );
};