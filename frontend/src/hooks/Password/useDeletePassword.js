import axios from 'axios';
import { useMutation } from 'react-query';

export default function useDeletePassword() {
  return useMutation(
    ({ passwordID }) =>
      axios
        .post(
          'http://localhost:5050/user/delete-password',
          { passwordID },
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
