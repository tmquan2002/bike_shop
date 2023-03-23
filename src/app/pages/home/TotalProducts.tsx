import React, { useEffect, useState } from 'react';
import productMocks from '@assets/mocks/products.json'
import './home.less'

const TotalProducts: React.FC = () => {
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    //Get API here
    setTotal(productMocks.length)
    setLoading(false)
  }, [])
  return (
    <div className='small-stat'>
      <div className='title'>TOTAL PRODUCTS</div>
      <div className={`result ${loading && `loading`}`}>{loading === true ? '. . .' : total}</div>
    </div>
  );
};

export default TotalProducts;