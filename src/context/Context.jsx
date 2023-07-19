import { createContext, useState } from "react";

const API_KEY = process.env.REACT_APP_TMDB_KEY;

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("user")) || false
  );
  const values = {
    user,
    setUser,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default ContextProvider;
