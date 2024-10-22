import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../../components/pages/auth/Login';

const Auth = () => {
    return (
      <Routes>
         <Route path="/" element={<Login />} />
      </Routes>
    );
  };
  
  export default Auth;