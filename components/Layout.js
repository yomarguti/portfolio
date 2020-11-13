import React from 'react';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="w-full px-2">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
