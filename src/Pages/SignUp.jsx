import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import "../Styles/SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const [FormData, SetFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const {name,value}=e.target;
    SetFormData({ ...FormData,[name]:value });
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(FormData);
  }

  return (
    <Container>
      <h1>Registration form</h1>
      <Form onSubmit={HandleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={FormData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={FormData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={FormData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">Register</Button>
        <p>Already hane an account? <Link to ="login">Login</Link></p>
      </Form>
    </Container>
  );
};

export default SignUp;
