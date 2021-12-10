import { React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';

import ClientProvider from './helper/ClientProvider';
import LoginForm from './components/LoginForm';
import Password from './components/Password';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';
import Nav from './components/Navigation';
import SignupForm from './components/SignupForm';

const App = () => {
  return (
    <QueryClientProvider client={ClientProvider}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Password />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route
            path="/home"
            element={<PrivateRoute session={session} component={<Home />} />}
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
