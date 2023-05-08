import { useTotal } from '@app/hooks/use-total';
import React from 'react';
import './home.less';
import apiLinks from '@app/utils/api-links';

const TotalOrders: React.FC = () => {
  const { total, loading } = useTotal(apiLinks.order.getTotal)

  return (
    <div className='small-stat'>
      <div className='title'>ORDERS</div>
      <div className={`result ${loading && `loading`}`}>{loading === true ? '. . .' : total}</div>
    </div>
  );
};

export default TotalOrders;