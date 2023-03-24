import React, { useEffect, useState } from 'react';
import ordersMocks from '@assets/mocks/orders.json'
import './home.less'

const TotalProducts: React.FC = () => {
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    //Get API here
    let revenue = 0;
    ordersMocks.forEach(order => {
      order.detail.forEach(detail => {
        revenue = revenue + detail.listPrice * detail.quantity
      })
    })
    setTotal(revenue)
    setLoading(false)
  }, [])
  return (
    <div className='small-stat'>
      <div className='title'>REVENUE</div>
      <div className={`result ${loading && `loading`}`}>{loading === true ? '. . .' : Math.ceil(total) + ' $'}</div>
    </div>
  );
};

export default TotalProducts;