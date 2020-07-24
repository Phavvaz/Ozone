import React from 'react';
import Header from '../UI/header';
import Footer from '../UI/footer';

const Layout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
