import DataTable, { ColumnType } from '@components/data-table/index';
import React, { useState, useEffect, Dispatch, SetStateAction, useCallback } from 'react';
import productMocks from '@assets/mocks/products.json'
import { Button, Icon } from 'semantic-ui-react';
import { useRef } from 'react';
import SearchBar from '@app/components/search-bar/SearchBar';
import { useBoolean } from '@app/hooks/use-state-custom';

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
  const fullData = useRef<Product[]>([])
  const [data, setData] = useState<Product[]>([])
  const [loading, setLoading] = useBoolean(true)

  const handleUpdate = useCallback((id: number) => {
    setCurrentProductID(id)
    setFeature('update')
  }, [setCurrentProductID, setFeature]);

  const handleSearch = (searchValue: string) => {
    let temp = fullData.current.filter((value) => value.name.toLowerCase().includes(searchValue))
    setData(temp)
  }

  useEffect(() => {
    fullData.current = productMocks.map((row) => ({
      id: row.id,
      name: row.name,
      brand: row.brand,
      category: row.category,
      modelYear: row.modelYear,
      listPrice: row.listPrice,
      detail: <Button color='grey' onClick={() => handleUpdate(row.id)}><Icon inverted name='edit' />Edit</Button>
    }))
    setData(fullData.current)
    setLoading(false)
  }, [handleUpdate, setLoading])

  return (
    <>
      <SearchBar onChange={handleSearch} align='left' />
      <DataTable columns={columns} data={data} pagination={7} loading={loading} />
    </>
  );
};

export default ProductTable;
