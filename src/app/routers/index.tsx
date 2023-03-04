import PageNotFound from '../pages/PageNotFound';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from '../components/app-layout';

const MainRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
