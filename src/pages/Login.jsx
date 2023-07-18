import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <h1 className="mb-5">Log In</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            required
            autoFocus
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            required
            minLength={6}
          />
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
    </Container>
  );
};

export default Login;
