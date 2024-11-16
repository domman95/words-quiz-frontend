import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/userContext.tsx";

export const PrivateRoutes = () => {
  const { loggedIn } = useContext(UserContext);
  const auth = { token: false };

  if (loggedIn) {
    auth.token = true;
  }

  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};
