import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './headerNav.module.scss';
import Contain from '../../../contain/contain';
import Logo from '../../../Logo/logo';
import icon from '../../../../assets/images/shops.svg';
import Nav from './Nav/Nav';

class HeaderNav extends Component {
  state = {
    links: [
      { name: 'Home', path: '' },
      { name: 'Cart', path: 'cart' },
      { name: 'Orders', path: 'orders' },
      { name: 'Blog', path: 'blog' },
      { name: 'About Us', path: 'aboutUs' }
    ],
    showed: 'none'
  };

  clicked = () => {
    this.setState({
      showed: this.state.showed === 'none' ? 'flex' : 'none'
    });
  };

  linked = () => {
    this.setState({
      showed: 'none'
    });
  };

  render() {
    return (
      <Contain>
        <div className={classes.headerNav}>
          <Nav
            clicked={this.clicked}
            show={this.state.showed}
            linked={this.linked}
          />
          <Logo />

          <ul className={classes.headerNavList}>
            {this.state.links.map((cur, i) => (
              <li
                className={classes.headerNavItems}
                key={i}
              >
                <Link
                  to={`/${cur.path}`}
                  className={classes.headerNavLink}
                >
                  {cur.name.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>

          {this.props.ishome ? (
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

          <button
            className={classes.headerNavNavbtn}
            onClick={this.clicked}
          >
            <svg>
              <use xlinkHref={`${icon}#icon-menu`} />
            </svg>
          </button>
        </div>
      </Contain>
    );
  }
}

export default HeaderNav;
