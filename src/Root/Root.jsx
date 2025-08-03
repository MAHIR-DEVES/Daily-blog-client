import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Root;
