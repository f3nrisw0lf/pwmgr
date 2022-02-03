import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';

const LoginForm = (props) => {
  const { handleSubmit, register, isWrongCredentials } = props;
  const [hidden, setHidden] = useState(true);

  const hiddenClick = () => {
    setHidden((prevValue) => !prevValue);
  };

  return (
    <>
      <Form className="card p-5 m-4" onSubmit={handleSubmit}>
        <h1 className="text-center fw-bold">Login</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            placeholder="Enter Email"
            type="email"
            {...register('email', { required: true })}
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
        <Button variant="primary" type="submit" className="mb-2">
          Submit
        </Button>
        {isWrongCredentials && (
          <Alert className="mt-2" variant="danger">
            Wrong Credentials: Either Username or Password.
          </Alert>
        )}
        <Link to="/signup" className="text-center">
          Sign-up now!
        </Link>
      </Form>
    </>
  );
};

export default LoginForm;
