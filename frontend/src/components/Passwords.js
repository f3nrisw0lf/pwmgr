import React from 'react';
import Password from './Password';

const Passwords = (props) => {
  const { passwords } = props;

  return (
    <>
      {passwords[0] ? (
        passwords.map((password) => {
          if (password._id)
            return <Password key={password._id} password={password} />;
        })
      ) : (
        <h3 className="ms-3 mb-2">No Password Yet...</h3>
      )}
    </>
  );
};

export default Passwords;
