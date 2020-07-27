import React from 'react';
import ozone from '../../assets/images/ozone_2.png';
import classes from './logo.module.scss';

const logo = () => {
  return (
    <div className={classes.logo}>
      <a href="#home">
        <img src={ozone} alt="Ozone" />
      </a>
    </div>
  );
};

export default logo;
