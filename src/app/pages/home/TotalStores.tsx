import { useTotal } from '@app/hooks/use-total';
import React from 'react';
import './home.less';
import apiLinks from '@app/utils/api-links';

const TotalStores: React.FC = () => {
  const { total, loading } = useTotal(apiLinks.store.getTotal)

  return (
    <div className='small-stat'>
      <div className='title'>STORES</div>
      <div className={`result ${loading && `loading`}`}>{loading === true ? '. . .' : total}</div>
    </div>
  );
};

export default TotalStores;