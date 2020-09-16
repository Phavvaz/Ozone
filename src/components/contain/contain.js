import React from 'react';
import classes from './contain.module.scss';

const Contain = props => {
  return (
    <div
      className={[classes.contain, props.addStyle].join(
        ' '
      )}
    >
      {props.children}
    </div>
  );
};

export default Contain;
