import DataTable, { ColumnType } from '@components/data-table/index';
import React, { useState, useEffect, Dispatch, SetStateAction, useCallback } from 'react';
import productMocks from '@assets/mocks/products.json'
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

interface Props {
  setCurrentProductID: Dispatch<SetStateAction<number>>;
  setFeature: Dispatch<SetStateAction<string>>;
}

const columns: ColumnType<Product, keyof Product>[] = [
  { key: 'name', header: 'Name' },
  { key: 'brand', header: 'Brand' },
  { key: 'category', header: 'Category' },
  { key: 'modelYear', header: 'Model Year' },
  { key: 'listPrice', header: 'List Price (USD)' },
  { key: 'detail', header: '' }
]

const ProductTable = ({ setCurrentProductID, setFeature }: Props): JSX.Element => {
  const [data, setData] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const handleUpdate = useCallback((id: number) => {
    setCurrentProductID(id)
    setFeature('update')
  }, []);

  useEffect(() => {
    setData(productMocks.map((row) => ({
      id: row.id,
      name: row.name,
      brand: row.brand,
      category: row.category,
      modelYear: row.modelYear,
      listPrice: row.listPrice,
      detail: <Button color='grey' onClick={() => handleUpdate(row.id)}><Icon inverted name='edit' />Edit</Button>
    })))
    setLoading(false)
  }, [setCurrentProductID])

  return (
    <DataTable columns={columns} data={data} pagination={8} loading={loading} />
  );
};

export default ProductTable;
