import { useMutation } from 'react-query';
import { loginUser } from 'src/api/authApi';
import Cookies from 'js-cookie';

export default function useLoginUser() {
  return useMutation(loginUser, {
    onSuccess: (data) => {
      if (data != 'failed')
        Cookies.set('user', JSON.stringify(data), {
          expires: 365,
          sameSite: 'Lax',
        });
    },
  });
}
