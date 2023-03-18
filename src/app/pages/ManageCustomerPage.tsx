import React, { useState, useEffect, useRef } from 'react';
import DataTable, { ColumnType } from '../components/data-table/index';
import customerMocks from '../assets/mocks/customers.json'
import { usaStateConverter } from '../../app/utils/helpers';
import SearchBar from '../components/SearchBar';

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
  const fullData = useRef<Customer[]>([])
  const [data, setData] = useState<Customer[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const handleSearch = (searchValue: string) => {
    let temp = fullData.current.filter((value) => value.fullName.toLowerCase().includes(searchValue))
    setData(temp)
  }

  useEffect(() => {
    fullData.current = customerMocks.map((row) => ({
      id: row.id,
      fullName: row.firstName + ' ' + row.lastName,
      phone: row.phone,
      email: row.email,
      address: row.street + ', ' + row.city + ', ' + usaStateConverter(row.state),
      zipCode: row.zipCode
    }))
    setData(fullData.current)
    setLoading(false)
    // setTimeout(() => {
    //   setLoading(false)
    // }, 1000)
  }, [])

  return (
    <>
      <div style={{ textAlign: 'right', width: '20%' }}><SearchBar onChange={handleSearch}/></div>
      <DataTable columns={columns} data={data} pagination loading={loading} />
    </>
  );
};

export default ManageCustomerPage;
