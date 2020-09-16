import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './containers/Home/Home';
import Cart from './containers/Cart/Cart';
import Orders from './containers/Orders/Orders';
import Blog from './containers/Blog/Blog';
import AboutUs from './containers/AboutUs/AboutUs';
import Admin from './containers/Admin/Admin';
import FruitDetail from './containers/Home/FruitDetail/FruitDetail';
import * as action from './store/index';
import './App.scss';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action.authCheckState());
  });
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:fruit" element={<FruitDetail />} />
      <Route path="cart" element={<Cart />} />
      <Route path="orders" element={<Orders />} />
      <Route path="blog" element={<Blog />} />
      <Route path="aboutUs" element={<AboutUs />} />
      <Route path="admin/*" element={<Admin />} />
    </Routes>
  );
};

export default App;
