import React from 'react';
import { Button, Container } from 'react-bootstrap';
import "../Styles/Home.css";

const Home = () => {
  return (
    <Container>
        <h1>Welcome to our website</h1>
        <p>We are here to server you</p>
        <Button variant="primary" type="submit">
          Get started
        </Button>
    </Container>
  );
};

export default Home;