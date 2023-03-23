import React from 'react';
import TotalCustomers from './TotalCustomers';
import './home.less'
import TotalStores from './TotalStores';
import OrdersCompleted from './OrdersCompleted';
import TotalProducts from './TotalProducts';

const HomePage: React.FC = () => {
  return (
    <div className='main-container'>
      <div className='main-title'>DASHBOARD</div>
      <div className='main-stat-container'>
        <TotalCustomers />
        <TotalStores />
        <OrdersCompleted />
        <TotalProducts />
      </div>
    </div>
  );
};

export default HomePage;