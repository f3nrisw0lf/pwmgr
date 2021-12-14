import { useMutation } from 'react-query';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function useLoginUser() {
  return useMutation(
    () =>
      axios
        .get('http://localhost:5050/auth/logout', { withCredentials: true })
        .then((res) => res.data),
    {
      onSuccess: (data) => {
        Cookies.set('user', '', {
          expires: 365,
        });
      },
    }
  );
}
