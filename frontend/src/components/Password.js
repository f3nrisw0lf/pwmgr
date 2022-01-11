import { useState, React } from 'react';
import { Modal, Form, Button, ListGroupItem } from 'react-bootstrap';
import { useForm, useFieldArray } from 'react-hook-form';
import useDeletePassword from 'src/hooks/User/useDeletePassword';
import useUpdatePassword from 'src/hooks/User/useUpdatePassword';

const Password = ({ password: data }) => {
  const { _id, name, password, username, urls } = data;
  const [hidden, setHidden] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const { mutate: deletePassword } = useDeletePassword();
  const { mutate: updatePassword } = useUpdatePassword();

  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      name: name,
      password: password,
      username: username,
      urls: urls.map((url) => {
        return { value: url };
      }),
    },
  });

  const { fields, append } = useFieldArray({ control, name: 'urls' });

  const hiddenClick = () => setHidden((prevValue) => !prevValue);

  const onSubmit = (data) => {
    const { urls, ...rest } = data;

    // Format Urls from [{value: <url>}] => [<url>]
    const formatUrls = urls.map((url) => url.value);

    // Format for API call - { _id, name, username, password}
    const password = { urls: formatUrls, ...rest };

    // API Call
    updatePassword({ ...password, _id });

    setModalShow(false);
  };

  return (
    <>
      {password && (
        <div className="my-2">
          <div className="d-flex gap-2">
            <Button
              variant="dark"
              className="flex-grow-1"
              onClick={() => setModalShow(true)}>
              <h5 className="fw-bold">{name}</h5> <br></br>
              <h6>{username}</h6>
            </Button>
            <Button
              variant="danger"
              onClick={() => deletePassword({ passwordID: _id })}>
              Delete
            </Button>
          </div>
          <Modal
            size="lg"
            show={modalShow}
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Body>
              <ListGroupItem className="d-grid gap-2" key={_id}>
                <Form
                  className="card p-5 m-4"
                  onSubmit={handleSubmit(onSubmit)}>
                  <h1 className="text-center fw-bold">{name}</h1>

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
                          <Form.Control {...register(`urls.${index}.value`)} />
                        </li>
                      );
                    })}
                    <Button onClick={() => append({ value: '' })}>ADD</Button>
                  </Form.Group>

                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={() => setModalShow(false)}>
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
