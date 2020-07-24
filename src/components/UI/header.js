import React from 'react';
import {
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
// import Home from '../../containers/Home/Home';
import ozone from '../../assets/images/ozone_2.png';
import Styles from './UI.module.css';

const header = () => {
  return (
    <div className={Styles.container}>
      <Row>
        <Col>
          <Navbar expand='lg' bg='white' variant='light'>
            <Navbar.Brand href='#home'>
              <img
                src={ozone}
                style={{ height: '50px', width: '80px' }}
                alt='Ozone'
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='mr-auto'>
                <Nav.Link href='#Home'>HOME</Nav.Link>
                <Nav.Link href='#SHOP'>SHOP</Nav.Link>
                <Nav.Link href='#CART'>CART</Nav.Link>
                <Nav.Link href='#ORDER'>ORDER</Nav.Link>
                <Nav.Link href='#BLOG'>BLOG</Nav.Link>
                <Nav.Link href='#ABOUT_US'>ABOUT US</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl
                  type='text'
                  placeholder='Search...'
                  className='mr-sm-2'
                />
                <Button variant='info'>Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </div>
  );
};

export default header;
