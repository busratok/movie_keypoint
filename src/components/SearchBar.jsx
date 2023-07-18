import { Button, Col, Form, Row } from "react-bootstrap";

const SearchBar = () => {
  const handleChange = (e) => {};
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} md="10">
          <Form.Control
            placeholder="Search a movie"
            type="search"
            className="w-100"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group as={Col} md="2">
          <Button type="submit" className="w-100">
            Search
          </Button>
        </Form.Group>
      </Row>
    </Form>
  );
};

export default SearchBar;
