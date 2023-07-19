import { Col, Container, Image, Row } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import { useContext, useState } from "react";
import axios from "axios";
import InfoCard from "../components/InfoCard";
import { Context } from "../context/Context";
import Header from "../components/Header";

const Home = () => {
  const { API_KEY, getMultiData, multiData, defaultImg, user } =
    useContext(Context);

  return user ? (
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
  ) : (
    <div></div>
  );
};

export default Home;
