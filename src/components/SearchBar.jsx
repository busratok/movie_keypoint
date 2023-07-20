import { useContext } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const { setQuery, getMultiData } = useContext(Context);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setQuery(e.target.value); // Update the 'query' state in the context with the user input
  };

  // Function to handle form submission (search button click or Enter key press)
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    getMultiData(); // Fetch data based on the user's search query using 'getMultiData' function from the context
    navigate("/home"); // Navigate to the home page ('/home') after submitting the search
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="10">
          <Form.Control
            placeholder="Search a movie, a Tv Show or a person"
            type="search"
            className="w-100"
            onChange={(e) => handleChange(e)}
            autoFocus
          />
          {/* Automatically focus the search input field when the component mounts*/}
        </Form.Group>
        <Form.Group as={Col} md="2">
          <Button
            type="submit"
            className="w-100"
            variant="btn btn-outline-dark"
          >
            Search
          </Button>
        </Form.Group>
      </Row>
    </Form>
  );
};

export default SearchBar;
