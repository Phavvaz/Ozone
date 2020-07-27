import React from 'react';
import classes from './headerNav.module.scss';
import Contain from '../../../contain/contain';
import Logo from '../../../Logo/logo';

const links = [
  'home',
  'shop',
  'cart',
  'order',
  'blog',
  'about'
];

const headerNav = () => {
  return (
    <div>
      <Contain>
        <div className={classes.headerNav}>
          <Logo />

          <ul className={classes.headerNavList}>
            {links.map((cur, i) => (
              <li
                className={classes.headerNavItems}
                key={i}
              >
                <a
                  className={classes.headerNavLink}
                  href={`#${cur}`}
                >
                  {cur}
                </a>
              </li>
            ))}
          </ul>

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
        </div>
      </Contain>
    </div>
  );
};

export default headerNav;
