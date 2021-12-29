import axios from 'axios';

const getUserData = () =>
  axios
    .get('http://localhost:5050/user/user-data', { withCredentials: true })
    .then((res) => res.data);

const createPassword = (password) =>
  axios
    .post(
      'http://localhost:5050/user/add-password',
      { passwords: [password] },
      { withCredentials: true }
    )
    .then((res) => {
      console.log(password);
      return res.data;
    });

const deletePassword = (passwordID) =>
  axios
    .post(
      'http://localhost:5050/user/delete-password',
      { passwordID },
      { withCredentials: true }
    )
    .then((res) => res.data);

export { getUserData, createPassword, deletePassword };
