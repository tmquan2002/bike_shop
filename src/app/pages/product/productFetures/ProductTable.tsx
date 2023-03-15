import DataTable, { ColumnType } from '../../../components/data-table/index';
import React from 'react';
import productMocks from '../../../assets/mocks/products.json'
import { Button, Icon } from 'semantic-ui-react';

interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  modelYear: number;
  listPrice: number;
  detail: React.ReactNode;
}

const columns: ColumnType<Product, keyof Product>[] = [
  { key: 'name', header: 'Name' },
  { key: 'brand', header: 'Brand' },
  { key: 'category', header: 'Category' },
  { key: 'modelYear', header: 'Model Year' },
  { key: 'listPrice', header: 'List Price (USD)' },
  { key: 'detail', header: '' }
]
const data: Product[] = productMocks.map((row) => ({
  id: row.id,
  name: row.name,
  brand: row.brand,
  category: row.category,
  modelYear: row.modelYear,
  listPrice: row.listPrice,
  detail: <Button color='grey' ><Icon inverted name='edit' />Edit</Button>
}))

const ProductTable: React.FC = () => {
  return (
    <DataTable columns={columns} data={data} pagination={8} />
  );
};

export default ProductTable;
