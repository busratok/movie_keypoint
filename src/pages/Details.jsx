import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Card, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Context } from "../context/Context";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

const baseImageUrl = "https://image.tmdb.org/t/p/w1280";
const defaultImg =
  "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2056&q=80";

const Details = () => {
  const [details, setDetails] = useState("");
  const { id, media_type } = useParams();
  const { API_KEY } = useContext(Context);
  const DETAIL_API = `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${API_KEY}`;
  const getDetails = async () => {
    try {
      let { data } = await axios(DETAIL_API);
      setDetails(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetails();
    console.log(details);
  }, []);

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
                  <p>{details.overview ? details.overview : "Not found"}</p>
                </div>

                <ListGroup className="list-group-flush bg-dark rounded">
                  <ListGroup.Item className="list-group-item-dark">
                    {media_type === "person"
                      ? `Known for: ${details.known_for_department}`
                      : `Release Date: ${
                          details.release_date || details.first_air_date
                        }`}
                  </ListGroup.Item>
                  <ListGroup.Item className="list-group-item-dark">
                    {media_type === "person"
                      ? `Birtday: ${details.birthday}`
                      : `Rate: ${
                          details.vote_average
                            ? details.vote_average.toFixed(1)
                            : "N/A"
                        } `}
                  </ListGroup.Item>
                  <ListGroup.Item className="list-group-item-dark">
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
