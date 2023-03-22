import React from 'react';
import customerMocks from '@assets/mocks/customers.json'

const TotalCustomers: React.FC = () => {
  return (
    <div>
      <div>TOTAL CUSTOMERS</div>
      <div>{customerMocks.length}</div>
    </div>
  );
};

export default TotalCustomers;