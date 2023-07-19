import { Col, Container, Row } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import { useContext, useState } from "react";
import axios from "axios";
import InfoCard from "../components/InfoCard";
import { Context } from "../context/Context";

const Home = () => {
  const [query, setQuery] = useState("");
  const [multiData, setMultiData] = useState([]);
  const { API_KEY } = useContext(Context);
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
      <Container className="rounded-4 my-4 p-3">
        <Row className="g-4 justify-content-center">
          {multiData.map((item) => (
            <Col key={item.id} md={6} lg={4} xl={3}>
              <InfoCard {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Home;
