import { QueryClient } from 'react-query';
import axios from 'axios';

const queryClient = new QueryClient();

// All default query API goes here
axios.get('http://localhost:5050/');

export default queryClient;
