import AxiosInstance from 'src/helper/AxiosInstance';

const getUserData = () =>
  AxiosInstance.get('/user/user-data').then((res) => res.data);

const createPassword = (password) =>
  AxiosInstance.post('/user/add-password', { passwords: [password] }).then(
    (res) => res.data
  );

const deletePassword = (passwordID) =>
  AxiosInstance.post('/user/delete-password', { passwordID }).then(
    (res) => res.data
  );

export { getUserData, createPassword, deletePassword };
