import React from 'react';
import { useAuth } from './auth/Auth';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, redirectPath = "/" }) {
    const { currentUser, loading } = useAuth(); // Assuming loading is part of your Auth context

    if (loading) {
        return <div>Loading...</div>; // You can customize your loading indicator
    }

    return currentUser ? children : <Navigate to={redirectPath} />;
}

export default ProtectedRoute;
