import React from 'react';
import TotalCustomers from './TotalCustomers';
import './home.less'
import TotalStores from './TotalStores';
import TotalShops from './TotalShops';
import Revenue from './Revenue';
import OrderStatusChart from './OrderStatusChart';
import ChartTest2 from './OrderMonthChart';

const HomePage: React.FC = () => {
  return (
    <div className='main-container'>
      <div className='main-title'>DASHBOARD</div>
      <div className='main-stat-container'>
        <TotalCustomers />
        <TotalStores />
        <TotalShops />
        <Revenue />
      </div>
      <div className='main-stat-container'>
        <OrderStatusChart />
        <ChartTest2 />
      </div>
    </div>
  );
};

export default HomePage;