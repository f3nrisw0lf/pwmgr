import { React, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import CreatePasswordForm from './CreatePasswordForm';

const CreatePasswordWidget = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Password
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>
        <Modal.Body>
          <CreatePasswordForm handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreatePasswordWidget;
