import { React, useState, useMemo, createContext } from 'react';
import Cookies from 'js-cookie';

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState(Cookies.get('user'));

  const refreshUser = () => setUser(Cookies.get('user'));

  const value = useMemo(
    () => ({
      user,
      refreshUser,
      setUser,
    }),
    [user]
  );

  return <UserContext.Provider value={value}>{props.children}</UserContext.Provider>;
};
