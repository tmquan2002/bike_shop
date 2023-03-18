import DataTable, { ColumnType } from '../../components/data-table/index';
import React, { useState } from 'react';
import storeMocks from '../../assets/mocks/stores.json'
import { usaStateConverter } from '../../../app/utils/helpers';
import { Button } from 'semantic-ui-react';
import StocksTable from './StocksTable';

interface Staff {
  id: number;
  name: string;
  phone?: string;
  email: string;
  address: string;
  zipCode: string;
  stock: React.ReactNode;
}

const columns: ColumnType<Staff, keyof Staff>[] = [
  { key: 'name', header: 'Name' },
  { key: 'phone', header: 'Phone' },
  { key: 'email', header: 'Email' },
  { key: 'address', header: 'Address' },
  { key: 'zipCode', header: 'Zipcode' },
  { key: 'stock', header: 'View Stock' }
]

const StoreTable: React.FC = () => {
  const [currentView, setCurrentView] = useState('store')
  const [currentStoreID, setCurrentStoreID] = useState(1)

  const handleDetail = (id: number) => {
    setCurrentStoreID(id)
    setCurrentView('stock')
  }

  const data: Staff[] = storeMocks.map((row) => ({
    id: row.id,
    name: row.name,
    phone: row.phone,
    email: row.email,
    address: row.street + ', ' + row.city + ', ' + usaStateConverter(row.state),
    zipCode: row.zipCode,
    stock: <Button color='grey' onClick={() => handleDetail(row.id)}>View</Button>
  }))

  return (
    <>
      {currentView === 'store' ? <DataTable columns={columns} data={data} /> :
        <StocksTable id={currentStoreID} setCurrentView={setCurrentView} />}
    </>
  );
};

export default StoreTable;
