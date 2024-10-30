import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/auth/Auth';
import ProtectedRoute from './components/ProtectedRoute';
import Auth from './routers/auth/auth';
import Page from './routers/pages/Page';
import Signup from './components/pages/users/create';
// import NotFound from './components/NotFound'; // A simple 404 component
// import Loading from './components/Loading'; // A loading indicator component

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Define a base path for user routes */}
          <Route path="/*" element={<Auth />} />
          <Route path="signup" element={<Signup />} />

          {/* Define a base path for admin routes */}
          <Route 
            path="admin/*"  
            element={
              <ProtectedRoute>
                <Page />
              </ProtectedRoute>
            } 
          />

          {/* Catch-all route for 404 Not Found */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
