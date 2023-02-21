import React from 'react';
import AppLayout from '../components/app-layout';

const HomePage: React.FC = () => {
  return (
    <AppLayout children='testing' routerPath='home' />
  );
};

export default HomePage;
