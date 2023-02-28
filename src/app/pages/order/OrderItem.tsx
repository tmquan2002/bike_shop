import React from 'react';
import AppLayout from '../../components/app-layout';
import DataTable, { ColumnType } from '../../components/data-table/index';
import customerMocks from '../../assets/mocks/customers.json'
import { usaStateConverter } from '../../utils/helpers';

interface Customer {
  id: number;
  fullName: string;
  phone?: string;
  email: string;
  address: string;
  zipCode: string;
}

const columns: ColumnType<Customer, keyof Customer>[] = [
  { key: 'fullName', header: 'Full Name' },
  { key: 'phone', header: 'Phone' },
  { key: 'email', header: 'Email' },
  { key: 'address', header: 'Address' },
  { key: 'zipCode', header: 'Zipcode' }
]
const data: Customer[] = customerMocks.map((row) => ({
  id: row.id,
  fullName: row.firstName + ' ' + row.lastName,
  phone: row.phone,
  email: row.email,
  address: row.street + ', ' + row.city + ', ' + usaStateConverter(row.state),
  zipCode: row.zipCode
}))

const customerTable = <DataTable columns={columns} data={data} />

const ManageCustomerPage: React.FC = () => {
  return (
    <AppLayout children={customerTable} routerPath='customer' />
  );
};

export default ManageCustomerPage;
