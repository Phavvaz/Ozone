import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import Admin from './containers/Admin/Admin';
import './App.scss';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </div>
  );
};

export default App;
