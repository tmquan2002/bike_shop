import { useTotal } from '@app/hooks/use-total';
import storeMocks from '@assets/mocks/stores.json';
import React from 'react';
import './home.less';

const TotalShops: React.FC = () => {
  const { total, loading } = useTotal(`${process.env.REACT_APP_CUSTOMER_API}`)

  return (
    <div className='small-stat'>
      <div className='title'>STORES</div>
      <div className={`result ${loading && `loading`}`}>{loading === true ? '. . .' : total}</div>
    </div>
  );
};

export default TotalShops;