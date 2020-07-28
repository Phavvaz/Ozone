import React from 'react';
import HeaderNav from './headerNav/headerNav';

const header = props => {
  return (
    <header>
      <HeaderNav ishome={props.ishome} />
    </header>
  );
};

export default header;
