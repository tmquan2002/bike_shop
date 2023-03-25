import { useTotal } from '@app/hooks/use-total';
import React from 'react';
import './home.less';

const Revenue: React.FC = () => {
  const { total, loading } = useTotal(0, true)

  return (
    <div className='small-stat'>
      <div className='title'>REVENUE</div>
      <div className={`result ${loading && `loading`}`}>{loading === true ? '. . .' : Math.ceil(total) + ' $'}</div>
    </div>
  );
};

export default Revenue;