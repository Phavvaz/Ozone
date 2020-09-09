import React, { useEffect } from 'react';
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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action.getAllFruits());
  }, [dispatch]);
  const isLoading = useSelector(
    state => state.fruits.loading,
    shallowEqual
  );

  const docsSize = useSelector(
    state =>
      state.fruits.docSize != null && state.fruits.docSize
  );

  const fruitsData = useSelector(
    state =>
      state.fruits.fruitsData.length === docsSize &&
      state.fruits.fruitsData,
    shallowEqual
  );
  console.log(docsSize);
  console.log(fruitsData);

  return (
    <>
      <div>
        <Layout ishome="true">
          <main>
            <HeaderView />
            <Card fruits={fruitsData} />
          </main>
        </Layout>
      </div>
    </>
  );
};

export default Home;
