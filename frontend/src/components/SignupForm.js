import React from 'react';
import { Link } from 'react-router-dom';
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
    <Form className="card m-4 p-4">
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
      <Button variant="primary" type="submit" className="mb-2">
        Submit
      </Button>
      <Link to="/login" className="text-center">
        Already have an account?
      </Link>
    </Form>
  );
};

export default SignupForm;
