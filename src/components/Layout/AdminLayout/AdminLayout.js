import React from 'react';
import Contain from '../../contain/contain';
import { Link } from 'react-router-dom';
import Logo from '../../Logo/logo';
import { Outlet } from 'react-router-dom';
// import Classes from './adminLayout.module.css';

const AdminLayout = props => {
  return (
    <div>
      <Contain>
        <Logo />

        <nav>
          <div>
            <Link to="dashBoard">DashBoard</Link>

            <Link to="sales">Sales</Link>

            <Link to="fruit">Fruit</Link>

            <Link to="blog">Blog</Link>
          </div>
        </nav>
        <hr />
        <div>
          <h1>Welcome: admin</h1>
        </div>
        <div>
          <h1>
            Date:{' '}
            {new Date().toDateString() +
              new Date().toLocaleTimeString()}
          </h1>
        </div>
        <div>
          <button onClick={() => console.log('Clicked')}>
            Logout
          </button>
        </div>
        {props.children}
        <Outlet />
      </Contain>
    </div>
  );
};

export default AdminLayout;
