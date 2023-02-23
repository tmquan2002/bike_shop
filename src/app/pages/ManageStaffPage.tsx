import DataTable, { ColumnType } from '../components/data-table/index';
import React from 'react';
import AppLayout from '../components/app-layout';
import staffMocks from '../assets/mocks/staffs.json'

interface Staff {
  id: number;
  fullName: string;
  phone?: string;
  email: string;
  active: 'No' | 'Yes';
  store: string;
  manager?: string;
}

const columns: ColumnType<Staff, keyof Staff>[] = [
  { key: 'id', header: 'ID' },
  { key: 'fullName', header: 'Full Name' },
  { key: 'phone', header: 'Phone' },
  { key: 'email', header: 'Email' },
  { key: 'active', header: 'Active' },
  { key: 'manager', header: 'Manager' }
]
const data: Staff[] = staffMocks.map((row) => ({
  id: row.id,
  fullName: row.firstName + ' ' + row.lastName,
  phone: row.phone,
  email: row.email,
  active: row.active === 0 ? 'No' : 'Yes',
  store: row.store.name,
  manager: row.manager !== undefined ? row.manager?.firstName + ' ' + row.manager?.lastName : undefined
}))

const staffTable = <DataTable columns={columns} data={data} />
const ManageStaffPage: React.FC = () => {
  return (
    <AppLayout children={staffTable} routerPath='staff' />
  );
};

export default ManageStaffPage;
