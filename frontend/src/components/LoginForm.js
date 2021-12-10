import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useInput from '../hooks/useInput';
import useLoginUser from '../hooks/useLoginUser';

const LoginForm = () => {
  const [getEmail, setEmail] = useInput('');
  const [getPassword, setPassword] = useInput('');
  const { mutate, isLoading } = useLoginUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutate({ username: getEmail, password: getPassword });
  };

  return (
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
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Link to="/signup">Sign-up now!</Link>
    </Form>
  );
};

export default LoginForm;
