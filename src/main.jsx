import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './router'; // default import
import { AuthProvider } from './Context/AuthContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
