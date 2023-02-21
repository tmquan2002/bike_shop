import React from 'react';
import AppLayout from '../components/app-layout';

const ManageStaffPage: React.FC = () => {
  return (
    <AppLayout children='staff' routerPath='customer' />
  );
};

export default ManageStaffPage;
