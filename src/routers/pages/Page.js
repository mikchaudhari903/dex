import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './dashboard/dashboard';
import ContactRoute from './contact/contact';
import ProfileRoute from './profile/profile';
import FaqRoute from './faq/faq';

const Page = () => {
    return (
      <Routes>
         <Route path="/*" element={<Dashboard />} />
         <Route path="/Contact" element={<ContactRoute />} />
         <Route path="/profile" element={<ProfileRoute />} />
         <Route path="/faq" element={<FaqRoute />} />
      </Routes>
    );
  };
  
  export default Page;