import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../Hooks/useAuth";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  // console.log(location);

  if (loading) {
    return (
      <span className="loading loading-spinner loading-lg text-[#e04d20]"></span>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/signIn" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivateRoute;
