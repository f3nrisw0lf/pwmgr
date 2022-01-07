import { useEffect, React } from 'react';
import { ListGroup } from 'react-bootstrap';
import CreatePasswordWidget from 'src/components/CreatePasswordWidget';
import Passwords from 'src/components/Passwords';
import useGetUser from 'src/hooks/User/useGetUser';

const Home = () => {
  const { data, refetch, status } = useGetUser();

  useEffect(() => {
    refetch();
  });

  return (
    <div className="m-2 p-4">
      <h1 className="fw-bold">Your Passwords</h1>
      <ListGroup>
        {status == 'success' && (
          <Passwords passwords={data.passwords} status={status} />
        )}
      </ListGroup>
      <CreatePasswordWidget />
    </div>
  );
};

export default Home;
