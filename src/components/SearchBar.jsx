import { Button, Col, Form, Row } from "react-bootstrap";

const SearchBar = ({ setQuery, getMultiData }) => {
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getMultiData();
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
          />
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
