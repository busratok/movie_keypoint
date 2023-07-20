import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Context } from "../context/Context";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Error from "../components/Error";
import loadingImg from "../assets/loading.gif";

const Details = () => {
  const [details, setDetails] = useState("");
  const { id, media_type } = useParams(); // Extract 'id' and 'media_type' from route parameters using 'useParams' hook
  const {
    API_KEY,
    defaultImg,
    baseImageUrl,
    error,
    setError,
    loading,
    setLoading,
  } = useContext(Context);
  const DETAIL_API = `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${API_KEY}`;

  // Define the 'getDetails' function to fetch details from the API
  const getDetails = async () => {
    try {
      let { data } = await axios(DETAIL_API);
      setDetails(data);
      setError(false);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // Use 'useEffect' to fetch details once the component mounts
  useEffect(() => {
    getDetails();
    console.log(details);
  }, []);

  if (error) {
    return <Error />;
  }

  if (loading) {
    return (
      <Container className="mt-5 text-center">
        <Image src={loadingImg} alt="loading" style={{ width: "300px" }} />
      </Container>
    );
  }

  return (
    <>
      <Header />
      <Container className="text-center mt-4">
        <SearchBar />
        <Container className="mt-5 mb-5">
          <h1 className="text-center">{details.title || details.name}</h1>
          <Container className="mt-5 details-card bg-dark text-light rounded p-5">
            <Row className="justify-content-between">
              <Col lg={6}>
                <Image
                  src={
                    details.poster_path
                      ? baseImageUrl + details.poster_path
                      : details.profile_path
                      ? baseImageUrl + details.profile_path
                      : defaultImg
                  }
                />
              </Col>
              <Col
                lg={6}
                className="d-flex flex-column justify-content-between"
              >
                <div>
                  <h2>Overview</h2>
                  {/* Display the overview if available, otherwise show "Not found" */}
                  <p>{details.overview ? details.overview : "Not found"}</p>
                </div>

                <ListGroup className="list-group-flush bg-dark rounded">
                  <ListGroup.Item className="list-group-item-dark">
                    {/* Display either "Known for" or "Release Date" based on 'media_type' */}
                    {media_type === "person"
                      ? `Known for: ${details.known_for_department}`
                      : `Release Date: ${
                          details.release_date || details.first_air_date
                        }`}
                  </ListGroup.Item>
                  <ListGroup.Item className="list-group-item-dark">
                    {/* Display either "Birthday" or "Rate" based on 'media_type' */}
                    {media_type === "person"
                      ? `Birtday: ${details.birthday}`
                      : `Rate: ${
                          details.vote_average
                            ? details.vote_average.toFixed(1)
                            : "N/A"
                        } `}
                  </ListGroup.Item>
                  <ListGroup.Item className="list-group-item-dark">
                    {/* Display either "Popularity" or "Total Vote" based on 'media_type' */}
                    {media_type === "person"
                      ? `Popularity: ${details.popularity}`
                      : `Total Vote: ${details.vote_count || "N/A"}`}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default Details;
