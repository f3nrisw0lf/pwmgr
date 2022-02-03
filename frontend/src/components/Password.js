import { useState, React } from 'react';
import { Modal, Form, Button, ListGroup } from 'react-bootstrap';
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

  const onFormSubmit = (data) => {
    const { urls, ...rest } = data;

    // Format Urls from [{value: <url>}] => [<url>]
    const formatUrls = urls.map((url) => url.value);

    // Format for API call - { _id, name, username, password}
    const password = { urls: formatUrls, ...rest };

    // API Call
    updatePassword({ ...password, _id });

    setModalShow(false);
  };

  const getFavicon = () => {
    const url = new URL(urls[0]);
    const faviconURL = url.protocol + url.host + '/favicon.ico';

    return faviconURL;
  };

  const [favicon, setFavicon] = useState(getFavicon());

  const faviconStyle = {
    width: '30px',
    height: '30px',
  };
  return (
    <>
      {password && (
        <div className="my-2">
          <div className="d-flex gap-1">
            <Button
              variant="dark"
              className="flex-grow-1"
              onClick={() => setModalShow(true)}>
              <img
                src={favicon}
                style={faviconStyle}
                className="my-1 align-self-center"
                alt="image"
              />
              <h5 className="fw-bold mb-3">{name}</h5>
              <h6 className="">{username}</h6>
            </Button>
            <Button
              size="lg"
              variant="danger"
              onClick={() => deletePassword({ passwordID: _id })}>
              <h4>x️</h4>
            </Button>
          </div>

          <Modal
            size="lg"
            show={modalShow}
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Body>
              <Form className="p-2 m-4" onSubmit={handleSubmit(onFormSubmit)}>
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

                <Form.Group className="mb-1" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type={hidden ? 'password' : 'text'}
                    placeholder="Enter Password"
                    {...register('password', { required: true })}
                  />
                  <input type="checkbox" onChange={hiddenClick} />
                  <Form.Label className="mt-1 mx-2">Visibility</Form.Label>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>URL</Form.Label>
                  {fields.map((field, index) => {
                    return (
                      <Form.Control
                        key={field.id}
                        className="mb-1"
                        {...register(`urls.${index}.value`)}
                      />
                    );
                  })}
                  <Button className="" onClick={() => append({ value: '' })}>
                    + ADD URL
                  </Button>
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
            </Modal.Body>
          </Modal>
        </div>
      )}
    </>
  );
};

export default Password;
