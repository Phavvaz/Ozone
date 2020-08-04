import React from 'react';
import classes from './Nav.module.scss';
import { Link } from 'react-router-dom';
import icon from '../../../../../assets/images/shops.svg';

const links = [
  { name: 'Home', path: '' },
  { name: 'Cart', path: 'cart' },
  { name: 'Orders', path: 'orders' },
  { name: 'Blog', path: 'blog' },
  { name: 'About Us', path: 'aboutUs' }
];

const Nav = props => {
  return (
    <div
      className={classes.Nav}
      style={{ display: `${props.show}` }}
    >
      <div className={classes.NavItem}>
        <button
          className={classes.Navbtn}
          onClick={props.clicked}
        >
          <svg>
            <use xlinkHref={`${icon}#icon-cross`} />
          </svg>
        </button>

        <ul className={classes.NavList}>
          {links.map((cur, i) => (
            <li className={classes.NavItems} key={i}>
              <Link
                to={`/${cur.path}`}
                className={classes.NavLink}
                onClick={props.linked}
              >
                {cur.name.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
