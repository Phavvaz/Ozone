import React from 'react';
import Contain from '../../../contain/contain';
import classes from './headerView.module.scss';

const headerView = () => {
  return (
    <div>
      <Contain>
        <div className={classes.headerView}>
          <h1 className={classes.headerViewHeading}>
            ozone
          </h1>

          <p className={classes.headerViewPara}>
            Fresh fruits you can count on anytime anyday
          </p>
        </div>
      </Contain>
    </div>
  );
};

export default headerView;
