import React from 'react';
import Password from './Password';

const Passwords = (props) => {
  const { status, passwords } = props;

  return (
    <>
      {passwords &&
        passwords.map((password) => {
          if (password._id) return <Password key={password._id} password={password} />;
        })}
    </>
  );
};

export default Passwords;
