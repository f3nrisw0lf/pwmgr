import React from 'react';
import { useQuery } from 'react-useQuery';
import axios from 'axios';

export default function getLoginUser(email, password) {
  return useQuery('user', () =>
    axios
      .post('http://localhost:5050/auth/login', { email, password })
      .then((res) => res.data),
  );
}
