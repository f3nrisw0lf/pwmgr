import { React, useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import LoginFormWidget from '../components/LoginFormWidget';
import useInput from '../hooks/useInput';
import useLoginUser from '../hooks/useLoginUser';
import { UserContext } from '../helper/UserContext';

const LoginForm = () => {
  const [getEmail, setEmail] = useInput('');
  const [getPassword, setPassword] = useInput('');
  const { mutate } = useLoginUser();
  const { user, refreshUser } = useContext(UserContext);

  useEffect(() => {
    refreshUser();
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutate({ username: getEmail, password: getPassword });
  };

  return (
    <>
      {user ? (
        <Navigate to="/home" />
      ) : (
        <LoginFormWidget
          setEmail={setEmail}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default LoginForm;
