import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PageNotFound from './pages/PageNotFound';

const App: React.FC = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
