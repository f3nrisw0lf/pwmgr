import axios from 'axios';

const baseURL = process.env.API_URL || 'http://localhost:5050/';

const AxiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

export default AxiosInstance;
