import React, { useEffect, useState } from 'react';
import storeMocks from '@assets/mocks/stores.json'
import './home.less'

const TotalShops: React.FC = () => {
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    //Get API here
    setTotal(storeMocks.length)
    setLoading(false)
  }, [])
  return (
    <div className='small-stat'>
      <div className='title'>TOTAL STORES</div>
      <div className={`result ${loading && `loading`}`}>{loading === true ? '. . .' : total}</div>
    </div>
  );
};

export default TotalShops;