import { React, useContext, useEffect } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import getLogout from '../hooks/useLogout';
import { UserContext } from '../helper/UserContext';

const Navigation = () => {
  const { mutate, isSuccess } = getLogout();
  const { user, refreshUser } = useContext(UserContext);

  useEffect(() => {
    refreshUser();
  });

  const logout = () => {
    mutate();
  };

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
          {user ? (
            <Button onClick={logout}>Logout</Button>
          ) : (
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
