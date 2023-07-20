import { Col, Container, Image, Row } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import { useContext } from "react";
import InfoCard from "../components/InfoCard";
import { Context } from "../context/Context";
import Header from "../components/Header";
import { Navigate } from "react-router-dom";
import Error from "../components/Error";

const Home = () => {
  const { multiData, defaultImg, user, error } = useContext(Context);

  // Render different content based on whether a user is authenticated or not
  return user ? (
    <>
      <Header />

      <Container className="text-center mt-4">
        <SearchBar />
        {error ? (
          <Error />
        ) : (
          <Container className="rounded-4 my-4 p-3">
            {!multiData.length ? (
              // If 'multiData' is empty, display the default image
              <Container className="d-flex justify-content-center">
                <Image src={defaultImg} className="homeImg" />
              </Container>
            ) : (
              // If 'multiData' is not empty, display the information cards in a grid layout
              <Row className="g-4 justify-content-center">
                {multiData.map((item) => (
                  <Col key={item.id} md={6} lg={4} xl={3}>
                    <InfoCard {...item} />
                  </Col>
                ))}
              </Row>
            )}
          </Container>
        )}
      </Container>
    </>
  ) : (
    // If the user is not authenticated, navigate to the root path ('/') which is Login page, using the 'Navigate' component
    <Navigate to="/" />
  );
};

export default Home;
