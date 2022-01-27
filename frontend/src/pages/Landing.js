import React from 'react';
import { Container, Card, Col, Row } from 'react-bootstrap';

const Landing = () => {
  const style = {
    width: '80%',
    height: '300px',
    borderRadius: '1px 21px 0 0',
  };

  return (
    <>
      <div className="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden w-100">
        <div className="my-3 py-3">
          <h2 className="display-5">Another headline</h2>
          <p className="lead">And an even wittier subheading.</p>
        </div>
        <div className="bg-light shadow-sm mx-auto" style={style}></div>
      </div>

      <Container fluid className="py-5 bg-dark bg-opacity-20">
        <h1 className="text-center text-white">Features</h1>
        <Row className="p-5 gap-2">
          <Col sm className="">
            <Card className="py-5">
              <Card.Body className="text-center">
                <Card.Title className="fw-bold">Lorem Ipsum</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reprehenderit deleniti sint earum rerum alias, iure hic. Atque
                  praesentium eligendi sapiente!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm className="">
            <Card className="py-5">
              <Card.Body className="text-center">
                <Card.Title className="fw-bold">Lorem Ipsum</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reprehenderit deleniti sint earum rerum alias, iure hic. Atque
                  praesentium eligendi sapiente!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm className="">
            <Card className="py-5">
              <Card.Body className="text-center">
                <Card.Title className="fw-bold">Lorem Ipsum</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                  assumenda itaque impedit deleniti adipisci temporibus cum
                  tempora molestias! Tempore, nam.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Landing;
