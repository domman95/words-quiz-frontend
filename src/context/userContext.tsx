import { createContext, ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

interface UserContextType {
  displayName: string | null;
  loggedIn: boolean;
  token: string | null;
  setUser: ({
    token,
    displayName,
  }: {
    token: string;
    displayName: string;
  }) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextType>({
  displayName: "",
  loggedIn: false,
  token: "",
  setUser: () => {},
  logout: () => {},
});

export const UserProvider = ({ children }: Props) => {
  const [displayName, setDisplayName] = useState<string | null>(
    localStorage.getItem("displayName"),
  );
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token"),
  );
  const [loggedIn, setLoggedIn] = useState<boolean>(
    Boolean(localStorage.getItem("token")),
  );
  const setUser = ({
    token,
    displayName,
  }: {
    token: string;
    displayName: string;
  }) => {
    localStorage.setItem("token", token);
    localStorage.setItem("displayName", displayName);
    setToken(token);
    setLoggedIn(true);
    setDisplayName(displayName);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("displayName");
    setToken(null);
    setLoggedIn(false);
    setDisplayName(null);
    window.location.href = "/login";
  };

  const contextValue: UserContextType = {
    displayName,
    loggedIn,
    token,
    setUser,
    logout,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
