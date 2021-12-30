import { React, useState, useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { UserContext } from 'src/helper/UserContext';
import LoginFormWidget from 'src/components/Auth/LoginFormWidget';
import useLogin from 'src/hooks/Auth/useLogin';

const LoginForm = () => {
  const { mutate: loginUser, data, onSuccess } = useLogin();
  const { register, handleSubmit, watch } = useForm();
  const { user: isUserLoggedIn, refreshUser } = useContext(UserContext);
  const [isWrongCredentials, setWrongCredentials] = useState(false);

  useEffect(() => {
    refreshUser();
    setWrongCredentials(data == 'failed');
  });

  const onSubmit = async ({ email, password }) => {
    loginUser({ username: email, password: password });
  };

  return (
    <>
      {isUserLoggedIn ? (
        <Navigate to="/home" />
      ) : (
        <LoginFormWidget
          register={register}
          handleSubmit={handleSubmit(onSubmit)}
          onSuccess={onSuccess}
          isWrongCredentials={isWrongCredentials}
          watch={watch}
        />
      )}
    </>
  );
};

export default LoginForm;
