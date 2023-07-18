import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ user, setUser }) => {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(user));
    formRef.current.reset();
    navigate("home");
  };
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <h1 className="mb-5">Log In</h1>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            onChange={(e) =>
              setUser((user) => ({ ...user, email: e.target.value }))
            }
            required
            autoFocus
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            onChange={(e) =>
              setUser((user) => ({ ...user, password: e.target.value }))
            }
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