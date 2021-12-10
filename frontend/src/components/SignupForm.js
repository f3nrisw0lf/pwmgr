import React from 'react';
import { Form, Button } from 'react-bootstrap';
import useInput from '../hooks/useInput';

const SignupForm = () => {
  const [getEmail, setEmail] = useInput('');
  const [getPassword, setPassword] = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(getEmail, getPassword);
  };

  return (
    <Form className="card m-2 p-4">
      <h1 className="text-center fw-bold">Signup</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={setEmail} />
        <Form.Text className="text-muted">
          We&apos;ll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={setPassword} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
    </Form>
  );
};

export default SignupForm;
