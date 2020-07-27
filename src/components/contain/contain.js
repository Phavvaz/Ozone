import React from 'react';
import classes from './contain.module.scss';

const contain = props => {
  return (
    <div className={classes.contain}>{props.children}</div>
  );
};

export default contain;
