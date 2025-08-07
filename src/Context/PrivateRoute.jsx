// src/Routes/PrivateRoute.jsx

import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  console.log(user);

  if (loading) {
    return <p>Loading...</p>; // অথবা Spinner
  }

  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
};

export default PrivateRoute;
