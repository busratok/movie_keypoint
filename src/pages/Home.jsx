import { Container } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import { useState } from "react";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const MULTI_SEARCH_API = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${query}`;

const Home = () => {
  const [query, setQuery] = useState("");
  const [multiData, setMultiData] = useState([]);

  return (
    <Container className="text-center mt-4">
      <SearchBar setQuery={setQuery} />
    </Container>
  );
};

export default Home;
