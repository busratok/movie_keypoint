import { Col, Container, Image, Row } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import { useContext, useState } from "react";
import axios from "axios";
import InfoCard from "../components/InfoCard";
import { Context } from "../context/Context";
import Header from "../components/Header";

const Home = () => {
  const { API_KEY, getMultiData, multiData } = useContext(Context);

  const defaultImg =
    "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2056&q=80";

  return (
    <>
      <Header />
      {/* {!multiData.length ? (
        <Container className="d-flex justify-content-center">
          <Image src={defaultImg} />
        </Container>
      ) : ( */}
      <Container className="text-center mt-4">
        <SearchBar />
        <Container className="rounded-4 my-4 p-3">
          {!multiData.length ? (
            <Container className="d-flex justify-content-center">
              <Image src={defaultImg} className="homeImg" />
            </Container>
          ) : (
            <Row className="g-4 justify-content-center">
              {multiData.map((item) => (
                <Col key={item.id} md={6} lg={4} xl={3}>
                  <InfoCard {...item} />
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </Container>
      {/* )} */}
    </>
  );
};

export default Home;
