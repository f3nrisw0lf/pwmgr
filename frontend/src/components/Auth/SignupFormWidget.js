import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const SignupForm = (props) => {
  const { handleSubmit, register } = props;

  return (
    <Form className="card m-4 p-4" onSubmit={handleSubmit}>
      <h1 className="text-center fw-bold">Signup</h1>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nickname</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Nickname"
          {...register('nickname', { required: true })}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
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
          placeholder="Password"
          {...register('password', { required: true })}
        />
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
