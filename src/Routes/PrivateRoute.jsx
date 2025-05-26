import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <span className="loading loading-spinner text-center loading-lg text-warning"></span>
    );
  }
  if (user) {
    return children;
  }
  return (
    <Navigate
      to={"/signIn"}
      state={{ from: location }}
      replace={true}
    ></Navigate>
  );
};

export default PrivateRoute;
