import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import Spinner from "../components/Spinner";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Spinner></Spinner>;
  }
  if (!user) {
    return <Navigate to="/login" state={location?.pathname}></Navigate>;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;
