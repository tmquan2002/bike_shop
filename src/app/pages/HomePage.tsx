import React from 'react';
import AppLayout from '../components/app-layout';

const HomePage: React.FC = () => {
  return (
    <AppLayout children='home' routerPath='home' />
  );
};

export default HomePage;
