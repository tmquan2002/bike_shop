import DataTable, { ColumnType } from '../../components/data-table/index';
import React from 'react';
import storeMocks from '../../assets/mocks/stores.json'
import { usaStateConverter } from '../../../app/utils/helpers';

interface Staff {
  id: number;
  name: string;
  phone?: string;
  email: string;
  address: string;
  zipCode: string;
}

const columns: ColumnType<Staff, keyof Staff>[] = [
  { key: 'name', header: 'Name' },
  { key: 'phone', header: 'Phone' },
  { key: 'email', header: 'Email' },
  { key: 'address', header: 'Address' },
  { key: 'zipCode', header: 'Zipcode' }
]
const data: Staff[] = storeMocks.map((row) => ({
  id: row.id,
  name: row.name,
  phone: row.phone,
  email: row.email,
  address: row.street + ', ' + row.city + ', ' + usaStateConverter(row.state),
  zipCode: row.zipCode
}))

const StoreTable: React.FC = () => {
  return (
    <DataTable columns={columns} data={data} />
  );
};

export default StoreTable;
