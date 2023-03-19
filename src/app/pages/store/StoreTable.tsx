import DataTable, { ColumnType } from '@components/data-table/index';
import React, { useState, useRef, useEffect } from 'react';
import storeMocks from '@assets/mocks/stores.json'
import { usaStateConverter } from '@app/utils/helpers';
import { Button } from 'semantic-ui-react';
import StockFeature from './stockFeatures';
import SearchBar from '@components/SearchBar';

interface Store {
  id: number;
  name: string;
  phone?: string;
  email: string;
  address: string;
  zipCode: string;
  stock: React.ReactNode;
}

const columns: ColumnType<Store, keyof Store>[] = [
  { key: 'name', header: 'Name' },
  { key: 'phone', header: 'Phone' },
  { key: 'email', header: 'Email' },
  { key: 'address', header: 'Address' },
  { key: 'zipCode', header: 'Zipcode' },
  { key: 'stock', header: '' }
]

const StoreTable: React.FC = () => {
  const fullData = useRef<Store[]>([])
  const [data, setData] = useState<Store[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [currentView, setCurrentView] = useState('store')
  const [currentStoreID, setCurrentStoreID] = useState(1)

  const handleDetail = (id: number) => {
    setCurrentStoreID(id)
    setCurrentView('stock')
  }

  const handleSearch = (searchValue: string) => {
    let temp = fullData.current.filter((value) => value.name.toLowerCase().includes(searchValue))
    setData(temp)
  }

  useEffect(() => {
    fullData.current = storeMocks.map((row) => ({
      id: row.id,
      name: row.name,
      phone: row.phone,
      email: row.email,
      address: row.street + ', ' + row.city + ', ' + usaStateConverter(row.state),
      zipCode: row.zipCode,
      stock: <Button color='grey' onClick={() => handleDetail(row.id)}>View</Button>
    }))
    setData(fullData.current)
    setLoading(false)
  }, [])

  if (currentView === 'stock') {
    return (
      <StockFeature id={currentStoreID} setCurrentView={setCurrentView} />
    )
  } else {
    return (
      <>
        <SearchBar onChange={handleSearch} />
        <DataTable columns={columns} data={data} loading={loading} />
      </>
    )
  }

};

export default StoreTable;
