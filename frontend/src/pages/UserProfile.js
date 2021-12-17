import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Passwords from '../components/Passwords';
import useGetUser from '../hooks/useGetUser';

const Home = () => {
  const { data, status } = useGetUser();

  return (
    <div className="m-2 p-4">
      <h1 className="fw-bold">Your Passwords</h1>
      <ListGroup>
        {status == 'success' && <Passwords passwords={data.passwords} status={status} />}
      </ListGroup>
    </div>
  );
};

export default Home;
