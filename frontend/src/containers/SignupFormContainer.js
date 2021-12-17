import React from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import useSignup from '../hooks/Auth/useSignup';
import SignupFormWidget from '../components/Auth/SignupFormWidget';

const SignupForm = () => {
  const { handleSubmit, register } = useForm();
  const { mutate: signupUser, isSuccess: isSignupSuccess } = useSignup();

  const onSubmit = (data) => {
    signupUser(data);
  };

  return (
    <>
      {isSignupSuccess ? (
        <Navigate to="/" />
      ) : (
        <SignupFormWidget handleSubmit={handleSubmit(onSubmit)} register={register} />
      )}
    </>
  );
};

export default SignupForm;
