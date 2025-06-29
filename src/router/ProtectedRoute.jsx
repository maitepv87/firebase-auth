import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoute = ({ children }) => {
  const { status } = useSelector((state) => state.auth);

  if (status === "checking") return <AppLoader />;

  if (status !== "authenticated") {
    return <Navigate to="/auth/login" />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
