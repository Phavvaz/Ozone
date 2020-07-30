import React, { useState, useEffect } from 'react';
import {
  useSelector,
  useDispatch,
  shallowEqual
} from 'react-redux';
import * as action from '../../store/index';
// import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/layout';
import HeaderView from '../../components/UI/header/headerView/headerView';
import Card from '../../components/UI/card/card';

const Home = props => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(action.initHomePageSuccess());
  //   console.log('dispatched');
  // }, [dispatch]);
  const fruits = useSelector(state => state.fruits.fruits);

  return (
    <>
      <div>
        <Layout ishome="true">
          <main>
            <HeaderView />
            <Card Fruits={fruits} />
          </main>
        </Layout>
      </div>
    </>
  );
};

export default Home;
