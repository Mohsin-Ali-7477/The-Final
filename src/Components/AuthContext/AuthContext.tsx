import React, { useState, useContext, ReactNode, useEffect } from "react";

interface AuthUserType {
  name: string | null;
  email: string;
  password: string;
}

interface AuthContextType {
  AuthUser: AuthUserType | null;
  setAuthUser: React.Dispatch<React.SetStateAction<AuthUserType | null>>;
  IsLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = (props) => {
  const [AuthUser, setAuthUser] = useState<AuthUserType | null>(null);
  const [IsLogin, setIsLogin] = useState<boolean>(false);
  useEffect(() => {
    const storedUser = localStorage.getItem("AuthUser");
    const storedIsLogin = localStorage.getItem("IsLogin");

    if (storedUser) {
      setAuthUser(JSON.parse(storedUser));
    }

    if (storedIsLogin === "true") {
      setIsLogin(true);
    }
  }, []); 
  useEffect(() => {
    if (AuthUser) {
      localStorage.setItem("AuthUser", JSON.stringify(AuthUser));
    } else {
      localStorage.removeItem("AuthUser");
    }

    localStorage.setItem("IsLogin", JSON.stringify(IsLogin));
  }, [AuthUser, IsLogin]); 
  const value: AuthContextType = {
    AuthUser,
    setAuthUser,
    IsLogin,
    setIsLogin,
  };

  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  );
};
