import React, { useEffect, useState } from 'react';
import orderMocks from '@assets/mocks/orders.json'
import './home.less'

const TotalStores: React.FC = () => {
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    //Get API here
    setTotal(orderMocks.length)
    setLoading(false)
  }, [])
  return (
    <div className='small-stat'>
      <div className='title'>TOAL ORDERS</div>
      <div className={`result ${loading && `loading`}`}>{loading === true ? '. . .' : total}</div>
    </div>
  );
};

export default TotalStores;