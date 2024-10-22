import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './routers/auth/auth';
import Page from './routers/pages/Page';

function App() {
  return (
    <Router>
      <Routes>
         {/* Define a base path for user routes */}
         <Route path="/*" element={<Auth />} />

        {/* Define a base path for admin routes */}
        <Route path="admin/*" element={<Page />} />
        
      </Routes>
    </Router>
  );
}

export default App;
