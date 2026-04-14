// # global auth state (user, token)

import { createContext, useState, useEffect } from "react";
import { getToken, setToken as saveToken, removeToken, getUser, setUser as saveUser, removeUser } from "../utils/storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = getToken();
    const storedUser = getUser();
    
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(storedUser);
    }
    setLoading(false);
  }, []);

  const login = (userData, authToken) => {
    setUser(userData);
    setToken(authToken);
    saveUser(userData);
    saveToken(authToken);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    removeUser();
    removeToken();
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};