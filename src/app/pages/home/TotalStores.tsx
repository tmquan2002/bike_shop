import { useTotal } from '@app/hooks/use-total';
import orderMocks from '@assets/mocks/orders.json';
import React from 'react';
import './home.less';

const TotalStores: React.FC = () => {
  const { total, loading } = useTotal(`${process.env.REACT_APP_CUSTOMER_API}`)

  return (
    <div className='small-stat'>
      <div className='title'>ORDERS</div>
      <div className={`result ${loading && `loading`}`}>{loading === true ? '. . .' : total}</div>
    </div>
  );
};

export default TotalStores;