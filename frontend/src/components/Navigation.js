import React from 'react';
import Cookies from 'js-cookie';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import getLogout from '../hooks/useLogout';

const Navigation = () => {
  const { mutate, isLoading } = getLogout();

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          {Cookies.get('user') != null ? (
            <Button onClick={() => mutate()}>Logout</Button>
          ) : (
            <Button> Login </Button>
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
