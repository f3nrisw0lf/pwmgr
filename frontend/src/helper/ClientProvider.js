import { QueryClient } from 'react-query';
import axios from 'axios';

const queryClient = new QueryClient();
// All defualt query API goes here
axios.get('http://localhost:5050/');
// All default mutation API goes here

export default queryClient;
