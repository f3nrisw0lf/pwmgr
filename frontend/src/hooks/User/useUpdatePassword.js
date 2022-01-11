import { updatePassword } from 'src/api/userApi';
import { useMutation } from 'react-query';

export default function useUpdatePassword() {
  return useMutation((password) => updatePassword(password), {
    onSuccess: (data) => {
      console.log(data);
    },
  });
}
