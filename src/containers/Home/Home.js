import React from 'react';
import Layout from '../../components/Layout/layout';
import HeaderView from '../../components/UI/header/headerView/headerView';
import Card from '../../components/UI/card/card';

const Home = () => {
  return (
    <div>
      <Layout ishome="true">
        <main>
          <React.Fragment>
            <HeaderView />
            <Card />
          </React.Fragment>
        </main>
      </Layout>
    </div>
  );
};

export default Home;
