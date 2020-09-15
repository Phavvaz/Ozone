import React from 'react';
import styles from './spinner.module.scss';

const spinner = () => {
  return <div className={styles.loader}>loading ....</div>;
};

export default spinner;
