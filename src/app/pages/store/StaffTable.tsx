import DataTable, { ColumnType } from '@components/data-table/index';
import React, { useEffect, useState } from 'react';
import staffMocks from '@assets/mocks/staffs.json'
import { staffState } from '@app/utils/enum';
import SearchBar from '@app/components/search-bar/SearchBar';
import { useRef } from 'react';
import { useBoolean } from '@app/hooks/use-state-custom';

interface Staff {
  id: number;
  fullName: string;
  phone?: string;
  email: string;
  active: staffState;
  store: string;
  manager?: string;
}

const columns: ColumnType<Staff, keyof Staff>[] = [
  { key: 'fullName', header: 'Full Name' },
  { key: 'phone', header: 'Phone' },
  { key: 'email', header: 'Email' },
  { key: 'active', header: 'Active' },
  { key: 'store', header: 'Store' },
  { key: 'manager', header: 'Manager' }
]

const StaffTable: React.FC = () => {
  const fullData = useRef<Staff[]>([])
  const [data, setData] = useState<Staff[]>([])
  const [loading, setLoading] = useBoolean(true)

  const handleSearch = (searchValue: string) => {
    let temp = fullData.current.filter((value) => value.fullName.toLowerCase().includes(searchValue))
    setData(temp)
  }

  useEffect(() => {
    fullData.current = staffMocks.map((row) => ({
      id: row.id,
      fullName: row.firstName + ' ' + row.lastName,
      phone: row.phone,
      email: row.email,
      active: row.active === 0 ? staffState.NOT_ACTIVE : staffState.ACTIVE,
      store: row.store,
      manager: row.manager !== undefined ? row.manager?.firstName + ' ' + row.manager?.lastName : undefined
    }))
    setData(fullData.current)
    setLoading(false)
  }, [setLoading])

  return (
    <>
      <SearchBar onChange={handleSearch} placeholder="Search name..."/>
      <DataTable columns={columns} data={data} pagination loading={loading} />
    </>
  );
};

export default StaffTable;
