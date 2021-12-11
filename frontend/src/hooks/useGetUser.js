import { useQuery } from 'react-query';
import axios from 'axios';

export default function useGetUser() {
  return useQuery('user', () =>
    axios
      .get('http://localhost:5050/user/user-data', { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
  );
}
