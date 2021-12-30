import { useMutation } from 'react-query';
import { logoutUser } from 'src/api/authApi';
import Cookies from 'js-cookie';

export default function useLoginUser() {
  return useMutation(logoutUser, {
    onSuccess: () => {
      Cookies.set('user', '', {
        expires: 365,
        sameSite: 'Lax',
      });
    },
  });
}
