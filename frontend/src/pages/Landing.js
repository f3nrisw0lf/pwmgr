import React from 'react';
import { Container, Card, Col, Row } from 'react-bootstrap';

const Landing = () => {
  return (
    <Container fluid className="">
      <Row className="my-5 mx-5 gap-2">
        <Col sm className="">
          <Card className="py-5">
            <Card.Body className="text-center">
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col sm className="">
          <Card className="py-5">
            <Card.Body className="text-center">
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col sm className="">
          <Card className="py-5">
            <Card.Body className="text-center">
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
