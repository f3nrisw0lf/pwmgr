import { Link, React } from 'react';
import { Navigate } from 'react-router-dom';

import Home from './Home';

const PrivateRoute = ({ session, component }) => {
  return session ? <Navigate to="/login" /> : component;
};

export default PrivateRoute;
