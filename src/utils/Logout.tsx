import { useContext, useEffect } from "react";
import { UserContext } from "../context/userContext.tsx";

export const Logout = () => {
  const { logout } = useContext(UserContext);

  useEffect(() => {
    void (() => {
      void logout();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};
