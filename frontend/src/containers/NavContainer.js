import { React, useContext, useEffect } from 'react';
import useLogout from '../hooks/Auth/useLogout';
import { UserContext } from '../helper/UserContext';
import NavWidget from '../components/NavWidget';

const NavContainer = () => {
  const { mutate: logoutUser } = useLogout();
  const { user, refreshUser } = useContext(UserContext);

  useEffect(() => {
    refreshUser();
  });

  return <NavWidget user={user} logout={logoutUser} />;
};

export default NavContainer;
