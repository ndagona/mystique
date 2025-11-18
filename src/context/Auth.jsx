import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [access, setAccess] = useState(false);
  return (
    <AuthContext.Provider value={{ access, setAccess }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
