import React from 'react';
import { Form, Button } from 'react-bootstrap';

const LoginForm = () => {
  return (
    <Form className="card p-4">
      <h1 className="text-center fw-bold">Login</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" required />
        <Form.Text className="text-muted">
          We&apos;ll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" name="rememberMe" label="Remember me" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LoginForm;