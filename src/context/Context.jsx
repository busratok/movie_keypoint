import axios from "axios";
import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("user")) || false
  );
  const [query, setQuery] = useState("");
  const [multiData, setMultiData] = useState([]);

  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const MULTI_SEARCH_API = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${query}`;

  const getMultiData = async () => {
    try {
      const { data } = await axios.get(MULTI_SEARCH_API);
      let { results } = await data;
      setMultiData(results);
    } catch (error) {
      console.log(error);
    }
  };
  const values = {
    user,
    setUser,
    API_KEY,
    getMultiData,
    query,
    setQuery,
    multiData,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default ContextProvider;
