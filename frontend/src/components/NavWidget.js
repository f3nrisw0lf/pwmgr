import { React } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Button, Form, FormControl } from 'react-bootstrap';

const Navigation = (props) => {
  const { user, logout } = props;

  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll>
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            {user ? (
              <Button className="mx-2" onClick={logout}>
                Logout
              </Button>
            ) : (
              <Link to="/login">
                <Button className="mx-2">Login</Button>
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
