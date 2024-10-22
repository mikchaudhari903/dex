import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from '../../../components/pages/contact/Contact';

const ContactRoute = () => {
    return (
      <Routes>
         <Route path="/" element={<Contact />} />
      </Routes>
    );
  };
  
  export default ContactRoute;