import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ session, component }) => {
  return !session ? <Navigate to="/login" /> : component;
};

export default PrivateRoute;
