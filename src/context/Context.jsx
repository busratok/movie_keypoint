import { createContext, useState } from "react";

export const Context = createContext();

const API_KEY = process.env.REACT_APP_TMDB_KEY;

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("user")) || false
  );
  const values = {
    user,
    setUser,
    API_KEY,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default ContextProvider;
