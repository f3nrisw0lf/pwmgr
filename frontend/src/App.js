import { React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';

import ClientProvider from 'src/helper/ClientProvider';
import { UserProvider } from 'src/helper/UserContext';
import LoginFormContainer from 'src/containers/LoginFormContainer';
import SignupFormContainer from 'src/containers/SignupFormContainer';
import NavContainer from 'src/containers/NavContainer';
import UserProfile from 'src/pages/UserProfile';
import Landing from 'src/pages/Landing';
import PrivateRoute from 'src/components/PrivateRoute';

const App = () => {
  return (
    <QueryClientProvider client={ClientProvider}>
      <BrowserRouter>
        <UserProvider>
          <NavContainer />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<LoginFormContainer />} />
            <Route path="/signup" element={<SignupFormContainer />} />
            <Route
              path="/home"
              element={<PrivateRoute component={<UserProfile />} />}
            />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
