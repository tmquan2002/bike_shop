import { useTotal } from '@app/hooks/use-total';
import customerMocks from '@assets/mocks/customers.json';
import React from 'react';
import './home.less';

const TotalCustomers: React.FC = () => {
  const { total, loading } = useTotal(customerMocks.length)
  
  return (
    <div className='small-stat'>
      <div className='title'>CUSTOMERS</div>
      <div className={`result ${loading && `loading`}`}>{loading === true ? '. . .' : total}</div>
    </div>
  );
};

export default TotalCustomers;