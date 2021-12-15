import { React, useEffect, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../helper/UserContext';

const PrivateRoute = ({ component }) => {
  const { user, refreshUser } = useContext(UserContext);

  return !user ? <Navigate to="/login" /> : component;
};

export default PrivateRoute;
