import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ManageCustomerPage from './pages/ManageCustomerPage';
import ManageProductPage from './pages/product/index';
import PageNotFound from './pages/PageNotFound';
import ManageOrderPage from './pages/order/OrderPage';
import ManageStorePage from './pages/store';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/customer" element={<ManageCustomerPage />} />
        <Route path="/store" element={<ManageStorePage />} />
        <Route path="/product" element={<ManageProductPage />} />
        <Route path="/order" element={<ManageOrderPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
