import { useMutation } from 'react-query';
import { signupUser } from 'src/api/authApi';

export default function useLoginUser() {
  return useMutation(signupUser, {
    onSuccess: (data) => {
      console.log(data);
    },
  });
}
