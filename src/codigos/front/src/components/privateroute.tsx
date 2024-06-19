import React from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('user'); // Verifica se há dados do usuário no localStorage

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
