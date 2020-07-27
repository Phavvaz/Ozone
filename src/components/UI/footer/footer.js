import React from 'react';
import classes from './footer.module.scss';
import Contain from '../../contain/contain';
import Logo from '../../Logo/logo';
import Icons from '../../../assets/images/icons.svg';

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

const Footer = () => {
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
                >
                  <svg key={i}>
                    <use
                      xlinkHref={`${Icons}#icon-${cur}`}
                    />
                  </svg>
                </a>
              ))}
            </div>
            <p>&copy; copyright 2020</p>
          </div>
        </div>
      </Contain>
    </footer>
  );
};

export default Footer;
