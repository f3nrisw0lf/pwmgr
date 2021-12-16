import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const LoginForm = (props) => {
  const { handleSubmit, register, isWrongCredentials } = props;

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
          <Form.Text className="text-muted">
            We&apos;ll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            {...register('password', { required: true })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" name="rememberMe" label="Remember me" />
        </Form.Group>
        <Button variant="primary" type="submit" className="mb-2">
          Submit
        </Button>
        <Link to="/signup" className="text-center">
          Sign-up now!
        </Link>

        {isWrongCredentials && <h1>Wrong Credentials</h1>}
      </Form>
    </>
  );
};

export default LoginForm;
