import React, { useEffect, useState } from 'react';
import orderMocks from '@assets/mocks/orders.json'
import './home.less'

const OrdersCompleted: React.FC = () => {
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    //Get API here
    setTotal((orderMocks.filter((value) => value.status === 4)).length)
    setLoading(false)
  }, [])
  return (
    <div className='small-stat'>
      <div className='title'>ORDERS COMPLETED</div>
      <div className={`result ${loading && `loading`}`}>{loading === true ? '. . .' : total}</div>
    </div>
  );
};

export default OrdersCompleted;