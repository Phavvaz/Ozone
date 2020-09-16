import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  useSelector,
  useDispatch,
  shallowEqual
} from 'react-redux';
import Logo from '../../Logo/logo';
import Contain from '../../contain/contain';
import * as action from '../../../store/index';

import styles from './adminLayout.module.scss';

const AdminLayout = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    action.authCheckState();
  }, [dispatch]);
  const navigate = useNavigate();
  const isLogin = useSelector(
    state => state.adminAuth.result != null
  );

  const stateLinks = useState([
    { link: 'dashboard', text: 'DashBoard' },
    { link: 'sales', text: 'Sales' },
    { link: 'fruit', text: 'Fruit' },
    { link: 'fruit/addFruit', text: 'Add Fruit' },
    { link: 'blog', text: 'Blog' }
  ])[0];
  return (
    <>
      <div>
        <Contain addStyle={styles.AdminLayoutHeading}>
          <Logo />

          {isLogin ? (
            <nav className={styles.AdminLayoutNav}>
              {stateLinks.map(cur => (
                <NavLink
                  className={styles.AdminLayoutLink}
                  to={cur.link}
                >
                  {cur.text}
                </NavLink>
              ))}
            </nav>
          ) : null}

          {isLogin ? (
            <>
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
            </>
          ) : null}
          {isLogin ? (
            <div>
              <button
                onClick={() => {
                  dispatch(action.onLogOut());
                  navigate('/', { replace: true });
                }}
              >
                Logout
              </button>
            </div>
          ) : null}
        </Contain>
        {props.children}
      </div>
    </>
  );
};

export default AdminLayout;
