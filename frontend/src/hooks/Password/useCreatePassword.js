import axios from 'axios';
import { useMutation } from 'react-query';

export default function useCreatePassword() {
  return useMutation(
    (password) =>
      axios
        .post(
          'http://localhost:5050/user/add-password',
          { passwords: [password] },
          { withCredentials: true }
        )
        .then((res) => {
          console.log(password);
          return res.data;
        }),
    {
      onSuccess: (data) => {
        console.log(data);
      },
    }
  );
}
