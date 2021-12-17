import { useState, React } from 'react';
import { Card, Modal, Button, ListGroupItem } from 'react-bootstrap';

const Password = ({ password }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {password && (
        <ListGroupItem className="d-grid gap-2" key={password._id}>
          <Card>
            <Button variant="light" size="lg" onClick={handleShow}>
              <p className="text-capitalize fw-bold">{password.name}</p>
              {password.urls[0]}
            </Button>
          </Card>

          <Modal show={show} onHide={handleClose}>
            <Card body>
              <Card.Title>{password.name}</Card.Title>
            </Card>
            <Modal.Body>Password: {password.password}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </ListGroupItem>
      )}
    </>
  );
};

export default Password;
