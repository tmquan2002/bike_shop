import React, { useState, useEffect, useRef } from 'react';
import DataTable, { ColumnType } from '@components/data-table/index';
import SearchBar from '@app/components/search-bar/SearchBar';
import { usaStateConverter } from '@app/utils/helpers';
import { useBoolean } from '@app/hooks/use-state-custom';
import apiLinks from '@app/utils/api-links';

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
  const [loading, setLoading] = useBoolean(true)

  const handleSearch = (searchValue: string) => {
    let temp = fullData.current.filter((value) => value.fullName.toLowerCase().includes(searchValue))
    setData(temp)
  }

  useEffect(() => {
    async function fetchList() {
      const response = await fetch(apiLinks.customer.get)
        .then((res) => res.json())
        .catch((error) => { console.log(error) })
      if (response.status === 200) {
        fullData.current = response.customers[0].map((row: any) => ({
          id: row.customer_id,
          fullName: row.first_name + ' ' + row.last_name,
          phone: row.phone,
          email: row.email,
          address: row.street + ', ' + row.city + ', ' + usaStateConverter(row.state),
          zipCode: row.zip_code
        }))
      }
    }
    fetchList()
    setData(fullData.current)
    setLoading(false)
    // setTimeout(() => {
    //   setLoading(false)
    // }, 1000)
  }, [setLoading])

  return (
    <>
      <SearchBar onChange={handleSearch} placeholder="Search name..." />
      <DataTable columns={columns} data={data} pagination loading={loading} title="Customers" />
    </>
  );
};

export default ManageCustomerPage;
