import axios from 'axios';
import { useMutation } from 'react-query';

const useDeletePassword = () => {
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
};

export default useDeletePassword;
