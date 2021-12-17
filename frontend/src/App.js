import { React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';

import ClientProvider from './helper/ClientProvider';
import { UserProvider } from './helper/UserContext';
import LoginFormContainer from './containers/LoginFormContainer';
import SignupFormContainer from './containers/SignupFormContainer';
import NavContainer from './containers/NavContainer';
import Password from './components/Password';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <QueryClientProvider client={ClientProvider}>
      <BrowserRouter>
        <UserProvider>
          <NavContainer />
          <Routes>
            <Route path="/" element={<Password />} />
            <Route path="/login" element={<LoginFormContainer />} />
            <Route path="/signup" element={<SignupFormContainer />} />
            <Route path="/home" element={<PrivateRoute component={<Home />} />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
