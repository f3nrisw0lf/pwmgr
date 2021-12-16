import { React, useContext, useEffect } from 'react';
import getLogout from '../hooks/useLogout';
import { UserContext } from '../helper/UserContext';
import NavWidget from '../components/NavWidget';

const NavContainer = () => {
  const { mutate } = getLogout();
  const { user, refreshUser } = useContext(UserContext);

  useEffect(() => {
    refreshUser();
  });

  const logout = () => {
    mutate();
  };

  return <NavWidget user={user} logout={logout} />;
};

export default NavContainer;
