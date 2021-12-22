import axios from 'axios';
import { useMutation } from 'react-query';

export default useCreatePassword = () => {
  return useMutation(
    ({ password }) =>
      axios
        .post(
          'http://localhost:5050/user/add-password',
          { password },
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
