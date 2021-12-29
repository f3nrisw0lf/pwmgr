import { React, useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { useForm, useFieldArray } from 'react-hook-form';
import useCreatePassword from '../hooks/User/useCreatePassword';

const LoginForm = (props) => {
  const { handleClose } = props;
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      urls: [{ value: '' }],
    },
  });
  const { fields, append } = useFieldArray({ control, name: 'urls' });
  const [hidden, setHidden] = useState(true);
  const { mutate: createPassword } = useCreatePassword();

  const hiddenClick = () => {
    setHidden((prevValue) => !prevValue);
  };

  const formOnSubmit = (data) => {
    const { urls, ...rest } = data;

    // Format URLS to fit the API create-password needs. ex. urls: ["lorem", "ipsu"]
    const formatUrls = urls.map((url) => url.value);

    const password = { urls: formatUrls, ...rest };

    // API Call to add in the database
    createPassword(password);

    // Modal Close
    handleClose();
  };

  return (
    <>
      <Form className="card p-5 m-4" onSubmit={handleSubmit(formOnSubmit)}>
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
          <Form.Label>URL</Form.Label>
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
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary">
            Save Password
          </Button>
        </Modal.Footer>
      </Form>
    </>
  );
};

export default LoginForm;
