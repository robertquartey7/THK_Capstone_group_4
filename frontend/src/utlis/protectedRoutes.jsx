import Cookies from "js-cookie";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector();
  console.log(isAuthenticated);
  let location = useLocation();
  console.log(location);

  if (!Cookies.get("token")) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
