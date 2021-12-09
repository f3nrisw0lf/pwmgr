import React from 'react';
import { useQuery } from 'react-useQuery';
import axios from 'axios';

export default function getUser {
  return useQuery('user', () =>
    axios.get('http://localhost:5050/user/user-data').then((res) => res.data),
  );
};
