import DataTable, { ColumnType } from '@components/data-table/index';
import React, { useEffect, useState } from 'react';
import staffMocks from '@assets/mocks/staffs.json'
import { staffState } from '@app/utils/enum';

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
  const [data, setData] = useState<Staff[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setData(staffMocks.map((row) => ({
      id: row.id,
      fullName: row.firstName + ' ' + row.lastName,
      phone: row.phone,
      email: row.email,
      active: row.active === 0 ? staffState.NOT_ACTIVE : staffState.ACTIVE,
      store: row.store,
      manager: row.manager !== undefined ? row.manager?.firstName + ' ' + row.manager?.lastName : undefined
    })))
    setLoading(false)
  }, [])

  return (
    <DataTable columns={columns} data={data} loading={loading} />
  );
};

export default StaffTable;
