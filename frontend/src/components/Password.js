import { useState, React } from 'react';
import { Card, Modal, Button } from 'react-bootstrap';

const Password = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Password Website
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Card body>
          <Card.Title>Website</Card.Title>
          This is some text within a card body.
        </Card>
        <Modal.Header closeButton>
          <Modal.Title>Password Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you&apos;re reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Password;
