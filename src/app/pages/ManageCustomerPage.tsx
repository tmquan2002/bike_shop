import React from 'react';
import AppLayout from '../components/app-layout';

const ManageCustomerPage: React.FC = () => {
  return (
    <AppLayout children='customer' routerPath='customer' />
  );
};

export default ManageCustomerPage;
