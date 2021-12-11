import { useState, React } from 'react';
import { Card, Modal, Button } from 'react-bootstrap';

const Password = ({ password }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {password && (
        <li key="_id">
          <Button variant="primary" onClick={handleShow}>
            {password.name}
          </Button>

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
        </li>
      )}
    </>
  );
};

export default Password;
