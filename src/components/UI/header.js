import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Home from '../../containers/Home/Home';
import ozone from '../../assets/images/ozone_2.png';
import Styles from './UI.module.css';

const header = () => {
  return (
    <div className={Styles.container}>
      <Row>
        <Col>
          <Button variant='link' onClick={<Home />}>
            <img src={ozone} style={{ height: '50px', width: '80px' }} />
          </Button>
        </Col>
        <Col>
          <hi>Navs</hi>
        </Col>
      </Row>
    </div>
  );
};

export default header;
