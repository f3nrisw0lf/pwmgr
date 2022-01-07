import AxiosInstance from 'src/helper/AxiosInstance';

const loginUser = ({ username, password }) =>
  AxiosInstance.post('http://localhost:5050/auth/login', {
    username,
    password,
  }).then((res) => res.data);

const logoutUser = () =>
  AxiosInstance.get('http://localhost:5050/auth/logout').then(
    (res) => res.data
  );

const signupUser = ({ nickname, email, password }) =>
  AxiosInstance.post('http://localhost:5050/auth/signup', {
    nickname,
    email,
    password,
  }).then((res) => res.data);

export { loginUser, logoutUser, signupUser };
