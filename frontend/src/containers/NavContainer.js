import { React, useContext, useEffect } from 'react';
import useLogout from 'src/hooks/Auth/useLogout';
import { UserContext } from 'src/helper/UserContext';
import NavWidget from 'src/components/NavWidget';

const NavContainer = () => {
  const { mutate: logoutUser } = useLogout();
  const { user, refreshUser } = useContext(UserContext);

  useEffect(() => {
    refreshUser();
  });

  return <NavWidget user={user} logout={logoutUser} />;
};

export default NavContainer;
