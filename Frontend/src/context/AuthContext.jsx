import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/authApi";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [checkedAuth, setCheckedAuth] = useState(false); // ✅ derived flag

  useEffect(() => {
    let active = true;
    const token = localStorage.getItem("token");

    if (!token) {
      if (active) setCheckedAuth(true);
      return;
    }

    api
      .get("/auth/me")
      .then((res) => {
        if (active) setUser(res.data.user);
      })
      .catch(() => {
        localStorage.removeItem("token");
        if (active) setUser(null);
      })
      .finally(() => {
        if (active) setCheckedAuth(true);
      });

    return () => {
      active = false;
    };
  }, []);

  const login = async (data) => {
    const res = await api.post("/auth/login", data);
    localStorage.setItem("token", res.data.token);
    setUser(res.data.user);
  };

  const register = async (data) => {
    const res = await api.post("/auth/register", data);
    localStorage.setItem("token", res.data.token);
    setUser(res.data.user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading: !checkedAuth, // ✅ derived loading
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
