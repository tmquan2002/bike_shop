import React from 'react';
import AppLayout from '../components/app-layout';

const ManageProductPage: React.FC = () => {
  return (
    <AppLayout children='product' routerPath='customer' />
  );
};

export default ManageProductPage;
