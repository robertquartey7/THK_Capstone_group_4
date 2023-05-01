import Cookies from "js-cookie";
import { Navigate, useLocation } from "react-router-dom";


const ProtectedRoute = ({ children }) => {
  let location = useLocation();
  console.log(location);

  if (!Cookies.get("token")) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
