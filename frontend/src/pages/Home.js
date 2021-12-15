import React from 'react';
import Password from '../components/Password';
import useGetUser from '../hooks/useGetUser';

const Home = () => {
  const { data, status } = useGetUser();

  return (
    <div>
      <ul>
        {status === 'success' &&
          data.passwords.map((password) => {
            if (password._id) return <Password key={password._id} password={password} />;
          })}
      </ul>
    </div>
  );
};

export default Home;
