import React from 'react';
import { Link } from 'react-router-dom';
import classes from './headerNav.module.scss';
import Contain from '../../../contain/contain';
import Logo from '../../../Logo/logo';

const HeaderNav = props => {
  // const links = ['home', 'cart', 'orders', 'blog', 'about'];
  return (
    <Contain>
      <div className={classes.headerNav}>
        <Logo />

        {/* <nav >
            {links.map((cur, i) => (
              <li
                className={classes.headerNavItems}
                key={i}
              >
                <Link
                  to="./{cur}"
                  className={classes.headerNavLink}
                >
                  {cur.toUpperCase()}
                </Link>
              </li>
            ))}
          </nav> */}
        <nav>
          <div className={classes.headerNavItems}>
            <Link to="/" className={classes.headerNavLink}>
              Home
            </Link>

            <Link
              to="/cart"
              className={classes.headerNavLink}
            >
              Cart
            </Link>

            <Link
              to="/orders"
              className={classes.headerNavLink}
            >
              Orders
            </Link>

            <Link
              to="/blog"
              className={classes.headerNavLink}
            >
              Blog
            </Link>

            <Link
              to="/aboutUs"
              className={classes.headerNavLink}
            >
              About Us
            </Link>
          </div>
        </nav>
        {props.ishome ? (
          <form className={classes.headerNavForm}>
            <input
              type="text"
              placeholder="Search..."
              className="mr-sm-2"
            />

            <button className={classes.headerNavBtn}>
              Search
            </button>
          </form>
        ) : null}
      </div>
    </Contain>
  );
};

export default HeaderNav;
