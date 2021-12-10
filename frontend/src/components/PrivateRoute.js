import React from 'react';
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ session, component }) => {
  return !Cookies.get('user') ? <Navigate to="/login" /> : component;
};

export default PrivateRoute;
