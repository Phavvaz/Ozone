import React from 'react';
import { useNavigate } from 'react-router-dom';
import ozone from '../../assets/images/ozone_2.png';
import classes from './logo.module.scss';

const Logo = props => {
  const navigate = useNavigate();
  return (
    <div className={classes.logo}>
      <button onClick={() => navigate('/')}>
        <img src={ozone} alt="Ozone" />
      </button>
    </div>
  );
};

export default Logo;
