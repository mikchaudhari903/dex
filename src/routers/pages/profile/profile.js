import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Profile from '../../../components/pages/profile/Profile';

const ProfileRoute = () => {
    return (
      <Routes>
         <Route path="/" element={<Profile />} />
      </Routes>
    );
  };
  
  export default ProfileRoute;