import axios from "axios";
import { createContext, useState } from "react";

// Create a new React context named "Context"
export const Context = createContext();

// Define the ContextProvider component that will wrap the application and provide state management
const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("user")) || false
  ); // Store user data obtained from sessionStorage or set it to 'false' if no user data is found
  const [query, setQuery] = useState(""); // Store the current search query
  const [multiData, setMultiData] = useState([]); // Store the search results from the API
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const MULTI_SEARCH_API = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${query}`;
  const baseImageUrl = "https://image.tmdb.org/t/p/w1280";
  const defaultImg =
    "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2056&q=80"; // Define a default image URL to be used if no image is available

  // Define an asynchronous function to fetch data from the TMDB API based on the current search query
  const getMultiData = async () => {
    try {
      const { data } = await axios.get(MULTI_SEARCH_API);
      let { results } = await data;
      setMultiData(results);
      setError(false);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  // Create an object 'values' that holds all the state variables and functions to be passed down as context values
  const values = {
    user,
    setUser,
    API_KEY,
    getMultiData,
    query,
    setQuery,
    multiData,
    baseImageUrl,
    defaultImg,
    error,
    setError,
    loading,
    setLoading,
  };

  // Return the Context.Provider component with the 'values' object as the value for the provided context
  // This makes the state variables and functions available to all the children components that consume this context
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default ContextProvider;
