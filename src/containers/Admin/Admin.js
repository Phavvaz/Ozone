import React from 'react';
// import { Routes, Route } from 'react-router-dom';
import AdminLayout from '../../components/Layout/AdminLayout/AdminLayout';

const Admin = () => {
  return (
    <div>
      <AdminLayout>
        <h1>This is Admin's page </h1>
        {/* Form for authenticating the Admin
          before redirecting him/her to the dashboard page */}
      </AdminLayout>
    </div>
  );
};

export default Admin;
