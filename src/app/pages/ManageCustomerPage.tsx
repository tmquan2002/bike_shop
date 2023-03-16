import React, { useState, useEffect } from 'react';
import DataTable, { ColumnType } from '../components/data-table/index';
import customerMocks from '../assets/mocks/customers.json'
import { usaStateConverter } from '../../app/utils/helpers';

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

const ManageCustomerPage: React.FC = () => {
  const [data, setData] = useState<Customer[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setData(customerMocks.map((row) => ({
      id: row.id,
      fullName: row.firstName + ' ' + row.lastName,
      phone: row.phone,
      email: row.email,
      address: row.street + ', ' + row.city + ', ' + usaStateConverter(row.state),
      zipCode: row.zipCode
    })))
    setLoading(false)
    // setTimeout(() => {
    //   setLoading(false)
    // }, 1000)
  }, [])

  return (
    <DataTable columns={columns} data={data} pagination loading={loading} />
  );
};

export default ManageCustomerPage;
