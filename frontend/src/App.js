import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginForm from './components/auth/LoginForm';
import Password from './components/Password';
import Nav from './components/Navigation';

const App = () => (
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route exact path="/" element={<Password />}></Route>
      <Route exact path="/login" element={<LoginForm />}></Route>
    </Routes>
  </BrowserRouter>
);

export default App;
