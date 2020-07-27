import React from 'react';
import Layout from '../../components/Layout/layout';
import HeaderView from '../../components/UI/header/headerView/headerView';
import Card from '../../components/UI/card/card';
import { Switch, Route } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Layout>
        <main>
          <Switch>
            <Route
              path="/"
              exact
              render={
                <React.Fragment>
                  <HeaderView />
                  <Card />
                </React.Fragment>
              }
            />
          </Switch>
        </main>
      </Layout>
    </div>
  );
};

export default Home;
