import { createPassword } from '../../api/userApi';
import { useMutation } from 'react-query';

export default function useCreatePassword() {
  return useMutation((password) => createPassword(password), {
    onSuccess: (data) => {
      console.log(data);
    },
  });
}
