import DataTable, { ColumnType } from '@components/data-table/index';
import React, { useState, useRef, useEffect, Dispatch, SetStateAction, useCallback } from 'react';
import storeMocks from '@assets/mocks/stores.json'
import { usaStateConverter } from '@app/utils/helpers';
import { Button, Icon } from 'semantic-ui-react';
import StockFeature from '../stockFeatures';
import SearchBar from '@components/search-bar/SearchBar';
import { useBoolean, useNumber, useString } from '@app/hooks/use-state-custom';

interface Store {
  id: number;
  name: string;
  phone?: string;
  email: string;
  address: string;
  zipCode: string;
  stock: React.ReactNode;
}
interface Props {
  setCurrentUpdateID: Dispatch<SetStateAction<number>>;
  setFeature: Dispatch<SetStateAction<string>>;
}

const columns: ColumnType<Store, keyof Store>[] = [
  { key: 'name', header: 'Name' },
  { key: 'phone', header: 'Phone' },
  { key: 'email', header: 'Email' },
  { key: 'address', header: 'Address' },
  { key: 'zipCode', header: 'Zipcode' },
  { key: 'stock', header: '' }
]

const StoreTable = ({ setFeature, setCurrentUpdateID }: Props): JSX.Element => {
  const fullData = useRef<Store[]>([])
  const [data, setData] = useState<Store[]>([])
  const [loading, setLoading] = useBoolean(true)
  const [currentView, setCurrentView] = useString('store')
  const [currentStoreID, setCurrentStoreID] = useNumber(1)

  //Change to stock table component
  const handleDetail = useCallback((id: number) => {
    setCurrentStoreID(id)
    setCurrentView('stock')
  }, [setCurrentStoreID, setCurrentView]);

  //Change to update form component
  const handleUpdate = useCallback((id: number) => {
    setCurrentUpdateID(id)
    setFeature('edit')
  }, [setCurrentUpdateID, setFeature]);

  const handleSearch = useCallback((searchValue: string) => {
    let temp = fullData.current.filter((value) => value.name.toLowerCase().includes(searchValue))
    setData(temp)
  }, [])

  useEffect(() => {
    fullData.current = storeMocks.map((row) => ({
      id: row.id,
      name: row.name,
      phone: row.phone,
      email: row.email,
      address: row.street + ', ' + row.city + ', ' + usaStateConverter(row.state),
      zipCode: row.zipCode,
      stock: <Button.Group>
        <Button color='grey' onClick={() => handleDetail(row.id)}><Icon inverted name='eye' />Stock</Button>
        <Button color='grey' onClick={() => handleUpdate(row.id)}><Icon inverted name='edit' />Edit</Button>
      </Button.Group>
    }))
    setData(fullData.current)
    setLoading(false)
  }, [handleUpdate, handleDetail, setLoading])

  if (currentView === 'stock') {
    return (
      <StockFeature id={currentStoreID} setCurrentView={setCurrentView} />
    )
  } else {
    return (
      <>
        <div style={{ textAlign: 'right' }}>
          <Button color='grey' onClick={() => setFeature('add')}>+ Add store</Button>
        </div>
        <SearchBar onChange={handleSearch} />
        <DataTable columns={columns} data={data} loading={loading} />
      </>
    )
  }

};

export default StoreTable;
