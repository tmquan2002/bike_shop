import DataTable, { ColumnType } from '../../components/data-table/index';
import React from 'react';
import categoryMocks from '../../assets/mocks/categories.json'

interface Category {
  id: number;
  name: string;
}

const columns: ColumnType<Category, keyof Category>[] = [
  { key: 'name', header: 'Name' },
]
const data: Category[] = categoryMocks.map((row) => ({
  id: row.id,
  name: row.name,
}))

const CategoryTable: React.FC = () => {
  return (
    <DataTable columns={columns} data={data} pagination />
  );
};

export default CategoryTable;
