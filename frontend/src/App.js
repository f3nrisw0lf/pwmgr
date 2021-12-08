import { useState, React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cookies from 'js-cookie';

import LoginForm from './components/auth/LoginForm';
import Password from './components/Password';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import Nav from './components/Navigation';

const App = () => {
  // const [session, setSession] = useState(Cookies.get('session'));
  const [session, setSession] = useState(Cookies.get('ASDASD'));

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Password />} />
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/home"
          element={<PrivateRoute session={session} component={<Home />} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
