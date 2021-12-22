import { useState, React } from 'react';
import { Modal, Form, Button, ListGroupItem } from 'react-bootstrap';
import { useForm, useFieldArray } from 'react-hook-form';

const Password = ({ password: data }) => {
  const { name, password, username, urls } = data;
  const [hidden, setHidden] = useState(true);
  const [modalShow, setModalShow] = useState(false);

  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      name: name,
      password: password,
      username: username,
      url: urls.map((url) => {
        return { value: url };
      }),
    },
  });

  const { fields, append } = useFieldArray({ control, name: 'url' });

  const hiddenClick = () => setHidden((prevValue) => !prevValue);
  const onSubmit = (data) => console.log(data);

  return (
    <>
      {password && (
        <div>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            {name}
          </Button>
          <Modal
            size="lg"
            show={modalShow}
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Body>
              <ListGroupItem className="d-grid gap-2" key={password._id}>
                <Form className="card p-5 m-4" onSubmit={onSubmit}>
                  <h1 className="text-center fw-bold">Add Password</h1>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      placeholder="Enter Name"
                      type="text"
                      {...register('name', { required: true })}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      placeholder="Enter Username"
                      type="text"
                      {...register('username', { required: true })}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type={hidden ? 'password' : 'text'}
                      placeholder="Enter Password"
                      {...register('password', { required: true })}
                    />
                    <input type="checkbox" onChange={hiddenClick} />
                    <Form.Label className="mx-2">Visibility</Form.Label>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>URLs</Form.Label>
                    {fields.map((field, index) => {
                      return (
                        <li key={field.id}>
                          <Form.Control {...register(`url.${index}.value`)} />
                        </li>
                      );
                    })}
                    <Button onClick={() => append({ value: '' })}>ADD</Button>
                  </Form.Group>

                  <Modal.Footer>
                    <Button variant="secondary" onClick={() => setModalShow(false)}>
                      Close
                    </Button>
                    <Button type="submit" variant="primary">
                      Save Password
                    </Button>
                  </Modal.Footer>
                </Form>
              </ListGroupItem>
            </Modal.Body>
          </Modal>
        </div>
      )}
    </>
  );
};

export default Password;
