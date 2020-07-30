import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import Cart from './containers/Cart/Cart';
import Orders from './containers/Orders/Orders';
import Blog from './containers/Blog/Blog';
import AboutUs from './containers/AboutUs/AboutUs';
import Admin from './containers/Admin/Admin';
import DashBoard from './containers/Admin/DashBoard/Dashboard';
import Sales from './containers/Admin/Sales/Sales';
import Fruit from './containers/Admin/Fruit/Fruit';
import AdminBlog from './containers/Admin/Blog/Blog';
import FruitDetail from './containers/Home/FruitDetail/FruitDetail';
import './App.scss';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:fruit" element={<FruitDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="admin" element={<Admin />}>
        <Route path="dashboard" element={<DashBoard />} />
        <Route path="sales" element={<Sales />} />
        <Route path="fruit" element={<Fruit />} />
        <Route path="blog" element={<AdminBlog />} />
      </Route>
    </Routes>
  );
};

export default App;
