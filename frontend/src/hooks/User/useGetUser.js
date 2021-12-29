import { getUserData } from '../../api/userApi';
import { useQuery } from 'react-query';

export default function useGetUser() {
  return useQuery('user', () => getUserData());
}
