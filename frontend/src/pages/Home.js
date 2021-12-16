import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Password from '../components/Password';
import useGetUser from '../hooks/useGetUser';

const Home = () => {
  const { data, status } = useGetUser();

  return (
    <div className="m-2 p-4">
      <h1>Your Passwords</h1>
      <ListGroup>
        {status === 'success' &&
          data.passwords.map((password) => {
            if (password._id) return <Password key={password._id} password={password} />;
          })}
      </ListGroup>
    </div>
  );
};

export default Home;
