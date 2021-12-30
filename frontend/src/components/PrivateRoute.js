import { React, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from 'src/helper/UserContext';

const PrivateRoute = ({ component }) => {
  const { user: isUserLoggedIn } = useContext(UserContext);

  return isUserLoggedIn ? component : <Navigate to="/login" />;
};

export default PrivateRoute;
