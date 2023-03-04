import PageNotFound from '../pages/PageNotFound';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from "../components/app-layout/index";
import HomePage from "../pages/HomePage";
import ManageCustomerPage from "../pages/ManageCustomerPage";
import ManageStorePage from "../pages/store";
import ManageOrderPage from "../pages/order";
import ManageProductPage from "../pages/product";

const MainRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/customer" element={<ManageCustomerPage />} />
          <Route path="/store" element={<ManageStorePage />} />
          <Route path="/product" element={<ManageProductPage />} />
          <Route path="/order" element={<ManageOrderPage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
