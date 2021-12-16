import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const LoginForm = (props) => {
  const { handleSubmit, setEmail, setPassword } = props;

  return (
    <>
      <Form className="card p-4 m-4" onSubmit={handleSubmit}>
        <h1 className="text-center fw-bold">Login</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={setEmail}
            required
          />
          <Form.Text className="text-muted">
            We&apos;ll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            onChange={setPassword}
            required
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
      </Form>
    </>
  );
};

export default LoginForm;
