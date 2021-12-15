import { useMutation } from 'react-query';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function useLoginUser() {
  return useMutation(
    ({ username, password }) =>
      axios
        .post(
          'http://localhost:5050/auth/login',
          { username, password },
          { withCredentials: true }
        )
        .then((res) => res.data),
    {
      onSuccess: (data) => {
        Cookies.set('user', JSON.stringify(data), {
          expires: 365,
          sameSite: 'Lax',
        });
      },
    }
  );
}
