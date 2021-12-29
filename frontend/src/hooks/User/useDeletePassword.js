import { deletePassword } from '../../api/userApi';
import { useMutation } from 'react-query';

export default function useDeletePassword() {
  return useMutation(({ passwordID }) => deletePassword(passwordID), {
    onSuccess: (data) => {
      console.log(data);
    },
  });
}
