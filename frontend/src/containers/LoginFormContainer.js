import { React, useState, useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import LoginFormWidget from '../components/LoginFormWidget';
import useLoginUser from '../hooks/useLoginUser';
import { UserContext } from '../helper/UserContext';

const LoginForm = () => {
  const { mutate, data, onSuccess } = useLoginUser();
  const { register, handleSubmit } = useForm();
  const { user, refreshUser } = useContext(UserContext);
  const [isWrongCredentials, setWrongCredentials] = useState(false);

  useEffect(() => {
    refreshUser();
    setWrongCredentials(data == 'failed');
  });

  const onSubmit = async ({ email, password }) => {
    mutate({ username: email, password: password });
  };

  return (
    <>
      {user ? (
        <Navigate to="/home" />
      ) : (
        <LoginFormWidget
          register={register}
          handleSubmit={handleSubmit(onSubmit)}
          onSuccess={onSuccess}
          isWrongCredentials={isWrongCredentials}
        />
      )}
    </>
  );
};

export default LoginForm;
