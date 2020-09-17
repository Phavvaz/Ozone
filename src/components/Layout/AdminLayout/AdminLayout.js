import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  useSelector,
  useDispatch,
  shallowEqual
} from 'react-redux';
import Logo from '../../Logo/logo';
import * as action from '../../../store/index';
import Contain from '../../contain/contain';

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

  const [navPhone, setNavPhone] = useState(null);

  const clicked = () => {
    setNavPhone(
      navPhone === null ? styles.AdminLayoutNavPhone : null
    );
  };

  return (
    <div className={styles.AdminLayout}>
      <div className={styles.AdminLayoutHeading}>
        <Contain addStyle={styles.AdminLayoutHeadingCon}>
          <Logo />
          {isLogin ? (
            <button
              className={styles.AdminLayoutNavBtn}
              onClick={clicked}
            >
              <span>&nbsp;</span>
            </button>
          ) : null}
        </Contain>
      </div>
      {isLogin ? (
        <nav
          className={[styles.AdminLayoutNav, navPhone].join(
            ' '
          )}
        >
          {stateLinks.map(cur => (
            <NavLink
              className={styles.AdminLayoutLink}
              to={cur.link}
              key={cur.link}
              activeClassName={styles.AdminLayoutLinkAc}
              onClick={clicked}
            >
              {cur.text}
            </NavLink>
          ))}
          <div>
            <button
              className={styles.AdminLayoutBtn}
              onClick={() => {
                clicked();
                dispatch(action.onLogOut());
                navigate('/admin', { replace: true });
              }}
            >
              Logout
            </button>
          </div>
        </nav>
      ) : null}
      {isLogin ? (
        <div className={styles.AdminLayoutInfo}>
          <Contain>
            <h1>Welcome: admin</h1>
            <div>
              Date:{' '}
              {new Date().toDateString() +
                new Date().toLocaleTimeString()}
            </div>
          </Contain>
        </div>
      ) : null}
      {props.children}
    </div>
  );
};

export default AdminLayout;
