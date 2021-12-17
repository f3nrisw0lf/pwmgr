import React from 'react';
import { useForm } from 'react-hook-form';
import useSignup from '../hooks/Auth/useSignup';
import SignupFormWidget from '../components/Auth/SignupFormWidget';

const SignupForm = () => {
  const { handleSubmit, register } = useForm();
  const { mutate: signupUser } = useSignup();

  const onSubmit = (data) => {
    signupUser(data);
  };

  return <SignupFormWidget handleSubmit={handleSubmit(onSubmit)} register={register} />;
};

export default SignupForm;
