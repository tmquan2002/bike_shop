import DataTable, { ColumnType } from '@components/data-table/index';
import React, { useCallback, useState } from 'react';
import brandMocks from '@assets/mocks/brands.json'
import { Button, Header, Icon, Input, Modal } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import SearchBar from '@app/components/search-bar/SearchBar';
import { useRef } from 'react';
import { useEffect } from 'react';

interface Brand {
  id: number;
  name: string;
  action: React.ReactNode;
}

const columns: ColumnType<Brand, keyof Brand>[] = [
  { key: 'name', header: 'Name' },
  { key: 'action', header: '' }
]

const BrandTable: React.FC = () => {
  const fullData = useRef<Brand[]>([])
  const [data, setData] = useState<Brand[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [modalAddOpen, setModalAddOpen] = useState(false)
  const [feature, setFeature] = useState<'add' | 'update'>('add')
  const { register, getValues, setValue } = useForm()

  const handleSubmit = () => {
    alert(getValues('brandName'))
    setModalAddOpen(false)
  }

  const handleAdd = () => {
    setFeature('add')
    setValue('brandName', '')
    setModalAddOpen(true)
  }

  const handleUpdate = useCallback((id: number, name: string) => {
    setFeature('update')
    setValue('brandName', name)
    setModalAddOpen(true)
  }, [setValue])

  const handleSearch = (searchValue: string) => {
    let temp = fullData.current.filter((value) => value.name.toLowerCase().includes(searchValue))
    setData(temp)
  }

  useEffect(() => {
    fullData.current = brandMocks.map((row) => ({
      id: row.id,
      name: row.name,
      action: <Button color='grey' onClick={() => handleUpdate(row.id, row.name)}><Icon inverted name='edit' />Edit</Button>
    }))
    setData(fullData.current)
    setLoading(false)
  }, [handleUpdate])

  return (
    <>
      <Modal
        onClose={() => setModalAddOpen(false)} onOpen={() => setModalAddOpen(true)}
        open={modalAddOpen} trigger={<Button color='grey' onClick={() => handleAdd()}>Add</Button>} size='mini'
      >
        <Modal.Content>
          <Header>{feature === 'add' ? 'New Brand' : 'Edit'}</Header>
          <Input><input placeholder='Enter a brand' {...register('brandName')} /></Input>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={() => setModalAddOpen(false)}>Cancel</Button>
          <Button content={feature === 'add' ? 'Add' : 'Edit'} onClick={handleSubmit} color='grey' />
        </Modal.Actions>
      </Modal>
      <div style={{ width: '50%', margin: '0 auto 0 auto' }}>
        <SearchBar onChange={handleSearch} align='left' />
        <DataTable columns={columns} data={data} pagination={5} loading={loading}/>
      </div>
    </>
  );
};

export default BrandTable;
