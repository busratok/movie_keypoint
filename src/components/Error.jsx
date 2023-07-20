import { Container } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

function Error() {
  return (
    <Container className="mt-5">
      <Alert variant="danger">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>Try again</p>
      </Alert>
    </Container>
  );
}

export default Error;
