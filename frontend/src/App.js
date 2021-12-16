import { React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';

import ClientProvider from './helper/ClientProvider';
import { UserProvider } from './helper/UserContext';
import LoginFormContainer from './containers/LoginFormContainer';
import Password from './components/Password';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';
import NavContainer from './containers/NavContainer';
import SignupForm from './components/SignupForm';

const App = () => {
  return (
    <QueryClientProvider client={ClientProvider}>
      <BrowserRouter>
        <UserProvider>
          <NavContainer />
          <Routes>
            <Route path="/" element={<Password />} />
            <Route path="/login" element={<LoginFormContainer />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/home" element={<PrivateRoute component={<Home />} />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
