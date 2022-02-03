import AxiosInstance from 'src/helper/AxiosInstance';

const getUserData = () => AxiosInstance.get('/user/me').then((res) => res.data);

const createPassword = (password) =>
  AxiosInstance.post('/user/add-password', { passwords: [password] }).then(
    (res) => res.data
  );

const updatePassword = (password) =>
  AxiosInstance.post('/user/update-password', { ...password }).then(
    (res) => res.data
  );

const deletePassword = (passwordID) =>
  AxiosInstance.post('/user/delete-password', { passwordID }).then(
    (res) => res.data
  );

export { getUserData, updatePassword, createPassword, deletePassword };
