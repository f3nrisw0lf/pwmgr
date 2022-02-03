import { React } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

const Navigation = (props) => {
  const { user, logout } = props;

  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" className="px-4">
        <Container fluid>
          <Link className="fw-bold navbar-brand" to="/">
            PWMGR
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll>
              <Link className="nav-link" to="/home">
                Home
              </Link>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            {user ? (
              <Button onClick={logout}>Logout</Button>
            ) : (
              <>
                <Link to="/signup">
                  <Button className="" variant="outline-success">
                    Signup
                  </Button>
                </Link>

                <Link to="/login">
                  <Button className="mx-2">Login</Button>
                </Link>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
