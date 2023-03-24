import React from 'react';
import TotalCustomers from './TotalCustomers';
import './home.less'
import TotalStores from './TotalStores';
import TotalShops from './TotalShops';
import TotalProducts from './TotalProducts';
import ChartTest from './ChartTest';
import ChartTest2 from './ChartTest2';

const HomePage: React.FC = () => {
  return (
    <div className='main-container'>
      <div className='main-title'>DASHBOARD</div>
      <div className='main-stat-container'>
        <TotalCustomers />
        <TotalStores />
        <TotalShops />
        <TotalProducts />
      </div>
      <div className='main-stat-container'>
        <ChartTest />
        <ChartTest2 />
      </div>
    </div>
  );
};

export default HomePage;