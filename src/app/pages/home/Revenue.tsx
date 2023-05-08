import React from 'react';
import './home.less';
import { useRevenue } from '@app/hooks/use-revenue';

const Revenue: React.FC = () => {
  const { revenue, loading } = useRevenue()

  return (
    <div className='small-stat'>
      <div className='title'>REVENUE</div>
      <div className={`result ${loading && `loading`}`}>{loading === true ? '. . .' : Math.ceil(revenue) + ' $'}</div>
    </div>
  );
};

export default Revenue;