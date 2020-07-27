import React from 'react';
import Header from '../UI/header/header';
import Footer from '../UI/footer/footer';

const Layout = props => {
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
