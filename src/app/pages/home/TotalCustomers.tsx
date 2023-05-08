import { useTotal } from '@app/hooks/use-total';
import React from 'react';
import './home.less';
import apiLinks from '@app/utils/api-links';

const TotalCustomers: React.FC = () => {
  const { total, loading } = useTotal(apiLinks.customer.getTotal)
  
  return (
    <div className='small-stat'>
      <div className='title'>CUSTOMERS</div>
      <div className={`result ${loading && `loading`}`}>{loading === true ? '. . .' : total}</div>
    </div>
  );
};

export default TotalCustomers;