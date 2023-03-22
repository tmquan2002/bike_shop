import PageNotFound from '../pages/PageNotFound';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from "@components/app-layout/index";
import ManageCustomerPage from "@app/pages/ManageCustomerPage";
import ManageStorePage from "@app/pages/store";
import ManageOrderPage from "@app/pages/order";
import ManageProductPage from "@app/pages/product";
import HomePage from '@app/pages/home';

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
