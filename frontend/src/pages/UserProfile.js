import { useEffect, useState, React } from 'react';
import { ListGroup, Form } from 'react-bootstrap';
import CreatePasswordWidget from 'src/components/CreatePasswordWidget';
import Passwords from 'src/components/Passwords';
import useGetUser from 'src/hooks/User/useGetUser';

const Home = () => {
  const { data, refetch, status } = useGetUser();
  const [filter, setFilter] = useState('');

  useEffect(() => {
    refetch();
  });

  const filterOnChange = (e) => {
    setFilter(e.target.value);
  };

  const nicknameCapitalizeFirst = (nickname) =>
    nickname.charAt(0).toUpperCase() + nickname.slice(1);

  return (
    <div className="m-2 p-4">
      <ListGroup>
        {status == 'success' && data.passwords && (
          <>
            <h1 className="fw-bold">
              Welcome {nicknameCapitalizeFirst(data.nickname)}! 🎉
            </h1>
            <Form.Control
              type="text"
              className="my-2"
              name="search"
              placeholder="Search something..."
              onChange={filterOnChange}
            />
            <Passwords
              passwords={data.passwords}
              status={status}
              filter={filter}
            />
          </>
        )}
      </ListGroup>
      <CreatePasswordWidget />
    </div>
  );
};

export default Home;
