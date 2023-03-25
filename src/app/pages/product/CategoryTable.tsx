import DataTable, { ColumnType } from '@components/data-table/index';
import React, { useCallback, useState } from 'react';
import categoryMocks from '@assets/mocks/categories.json'
import { Button, Header, Icon, Input, Modal } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import { useEffect } from 'react';
import SearchBar from '@app/components/search-bar/SearchBar';
import { useBoolean } from '@app/hooks/use-state-custom';

interface Category {
  id: number;
  name: string;
  action: React.ReactNode;
}

const columns: ColumnType<Category, keyof Category>[] = [
  { key: 'name', header: 'Name' },
  { key: 'action', header: '' }
]

const CategoryTable: React.FC = () => {
  const fullData = useRef<Category[]>([])
  const [data, setData] = useState<Category[]>([])
  const [loading, setLoading] = useBoolean(true)
  const [modalAddOpen, setModalAddOpen] = useBoolean(false)
  const [feature, setFeature] = useState<'add' | 'update'>('add')
  const { register, getValues, setValue } = useForm()

  const handleSubmit = () => {
    alert(getValues('cateName'))
    setModalAddOpen(false)
  }

  const handleAdd = () => {
    setFeature('add')
    setValue('cateName', '')
    setModalAddOpen(true)
  }

  const handleUpdate = useCallback((id: number, name: string) => {
    setFeature('update')
    setValue('cateName', name)
    setModalAddOpen(true)
  }, [setValue, setModalAddOpen])

  const handleSearch = (searchValue: string) => {
    let temp = fullData.current.filter((value) => value.name.toLowerCase().includes(searchValue))
    setData(temp)
  }

  useEffect(() => {
    fullData.current = categoryMocks.map((row) => ({
      id: row.id,
      name: row.name,
      action: <Button color='grey' onClick={() => handleUpdate(row.id, row.name)}><Icon inverted name='edit' />Edit</Button>
    }))
    setData(fullData.current)
    setLoading(false)
  }, [handleUpdate, setLoading])

  return (
    <>
      <Modal
        onClose={() => setModalAddOpen(false)} onOpen={() => setModalAddOpen(true)}
        open={modalAddOpen} trigger={<Button color='grey' onClick={() => handleAdd()}>Add</Button>} size='mini'
      >
        <Modal.Content>
          <Header>{feature === 'add' ? 'New Category' : 'Edit'}</Header>
          <Input><input placeholder='Enter a category' {...register('cateName')} /></Input>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={() => setModalAddOpen(false)}>Cancel</Button>
          <Button content={feature === 'add' ? 'Add' : 'Edit'} onClick={handleSubmit} color='grey' />
        </Modal.Actions>
      </Modal>
      <div style={{ width: '50%', margin: '0 auto 0 auto' }}>
        <SearchBar onChange={handleSearch} align='left' />
        <DataTable columns={columns} data={data} pagination={5} loading={loading} />
      </div>
    </>
  );
};

export default CategoryTable;
