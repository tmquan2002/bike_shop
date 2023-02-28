import DataTable, { ColumnType } from '../../components/data-table/index';
import React from 'react';
import productMocks from '../../assets/mocks/products.json'

interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  modelYear: number;
  listPrice: number;
}

const columns: ColumnType<Product, keyof Product>[] = [
  { key: 'name', header: 'Name' },
  { key: 'brand', header: 'Brand' },
  { key: 'category', header: 'Category' },
  { key: 'modelYear', header: 'Model Year' },
  { key: 'listPrice', header: 'List Price (USD)' }
]
const data: Product[] = productMocks.map((row) => ({
  id: row.id,
  name: row.name,
  brand: row.brand,
  category: row.category,
  modelYear: row.modelYear,
  listPrice: row.listPrice,
}))

const ProductTable: React.FC = () => {
  return (
    <DataTable columns={columns} data={data} pagination />
  );
};

export default ProductTable;
