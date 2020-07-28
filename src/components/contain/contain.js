import React from 'react';
import classes from './contain.module.scss';

const Contain = props => {
  return (
    <div className={classes.contain}>{props.children}</div>
  );
};

export default Contain;
