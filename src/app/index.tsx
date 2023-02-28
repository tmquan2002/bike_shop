import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ManageCustomerPage from './pages/ManageCustomerPage';
import ManageProductPage from './pages/product/index';
import ManageStaffPage from './pages/ManageStaffPage';
import PageNotFound from './pages/PageNotFound';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/customer" element={<ManageCustomerPage />} />
        <Route path="/staff" element={<ManageStaffPage />} />
        <Route path="/product" element={<ManageProductPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
