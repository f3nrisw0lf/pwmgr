import { useMutation } from 'react-query';
import axios from 'axios';

export default function useLoginUser() {
  return useMutation(
    ({ nickname, email, password }) =>
      axios
        .post(
          'http://localhost:5050/auth/signup',
          { nickname, email, password },
          { withCredentials: true }
        )
        .then((res) => res.data),
    {
      onSuccess: (data) => {
        console.log(data);
      },
    }
  );
}
