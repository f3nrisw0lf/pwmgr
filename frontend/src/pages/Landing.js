import React from 'react';
import securePhoto from 'src/assets/secure_files.svg';
import encrypt from 'src/assets/encrypt.png';
import easyToUse from 'src/assets/easy_to_use.png';
import passwordGenerate from 'src/assets/password_generate.png';
import { Container, Card, Col, Row } from 'react-bootstrap';

const Landing = () => {
  const horizontalLineStyle = {
    border: '1px solid white',
    margin: '0',
  };

  return (
    <div className="bg-dark">
      <div className="me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden w-100">
        <img className="w-25" src={securePhoto} />
        <div className="my-3 py-3">
          <h2 className="display-5">Password Manager</h2>
          <p className="lead">
            Don&apos;t bother rememebering various passwords
          </p>
        </div>
      </div>

      <hr className="w-75 my-5 mx-auto" style={horizontalLineStyle} />

      <Container fluid className="py-5 bg-dark bg-opacity-20">
        <h1 className="text-center text-white">Features</h1>
        <Row className="p-5 gap-2">
          <Col sm className="">
            <Card className="py-5">
              <Card.Body className="text-center">
                <img className="w-25 mb-4" src={encrypt} />
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
                <img className="w-25 mb-4" src={easyToUse} />
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
                <img className="w-25 mb-4" src={passwordGenerate} />
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
    </div>
  );
};

export default Landing;
