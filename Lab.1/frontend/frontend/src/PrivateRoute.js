import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const user = localStorage.getItem('guest'); // Check if user is in localStorage

  return user ? children : <Navigate to="/" />;
};

export default PrivateRoute;
