import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Faq from '../../../components/pages/faq/Faq';

const FaqRoute = () => {
    return (
      <Routes>
         <Route path="/" element={<Faq />} />
      </Routes>
    );
  };
  
  export default FaqRoute;