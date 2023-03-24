import React, { useEffect, useState } from 'react';
import customerMocks from '@assets/mocks/customers.json'
import './home.less'

const TotalCustomers: React.FC = () => {
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    //Get API here
    setTotal(customerMocks.length)
    setLoading(false)
  }, [])
  return (
    <div className='small-stat'>
      <div className='title'>CUSTOMERS</div>
      <div className={`result ${loading && `loading`}`}>{loading === true ? '. . .' : total}</div>
    </div>
  );
};

export default TotalCustomers;