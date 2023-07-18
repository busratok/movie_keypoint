import { Container } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import axios from "axios";

const Home = () => {
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

  return (
    <Container className="text-center mt-4">
      <SearchBar setQuery={setQuery} getMultiData={getMultiData} />
    </Container>
  );
};

export default Home;
