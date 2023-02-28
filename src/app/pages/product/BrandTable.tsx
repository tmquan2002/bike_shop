import DataTable, { ColumnType } from '../../components/data-table/index';
import React from 'react';
import brandMocks from '../../assets/mocks/brands.json'

interface Brand {
  id: number;
  name: string;
}

const columns: ColumnType<Brand, keyof Brand>[] = [
  { key: 'name', header: 'Name' },
]
const data: Brand[] = brandMocks.map((row) => ({
  id: row.id,
  name: row.name,
}))

const BrandTable: React.FC = () => {
  return (
    <DataTable columns={columns} data={data} pagination />
  );
};

export default BrandTable;
