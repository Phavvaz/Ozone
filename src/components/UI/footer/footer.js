import React from 'react';
import classes from './footer.module.scss';
import Contain from '../../contain/contain';
import Logo from '../../Logo/logo';
import Icons from '../../../assets/images/icons.svg';

const Footer = props => {
  const days = [
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SATURDAY',
    'SUNDAY'
  ];

  const icons = ['facebook2', 'instagram', 'twitter'];
  return (
    <footer className={classes.footer}>
      <Contain>
        <div className={classes.footerBtm}>
          <Logo />

          <div className={classes.footerHrs}>
            <h3 className={classes.footerH3}>
              opening hours
            </h3>

            <ul className={classes.footerList}>
              {days.map((cur, i) => (
                <li className={classes.footerItems} key={i}>
                  <p>{cur}</p> <span>time to time</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={classes.footerEnd}>
            <div className={classes.footerIcon}>
              {icons.map((cur, i) => (
                <a
                  href={cur}
                  className={classes.footerLink}
                  key={i}
                >
                  <svg key={i}>
                    <use
                      xlinkHref={`${Icons}#icon-${cur}`}
                    />
                  </svg>
                </a>
              ))}
            </div>
            <p>
              &copy; copyright {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </Contain>
    </footer>
  );
};

export default Footer;
