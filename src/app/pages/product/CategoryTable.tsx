import DataTable, { ColumnType } from '@components/data-table/index';
import React, { useState } from 'react';
import categoryMocks from '@assets/mocks/categories.json'
import { Button, Header, Input, Modal } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import { useEffect } from 'react';
import SearchBar from '@app/components/search-bar/SearchBar';

interface Category {
  id: number;
  name: string;
}

const columns: ColumnType<Category, keyof Category>[] = [
  { key: 'name', header: 'Name' },
]

const CategoryTable: React.FC = () => {
  const fullData = useRef<Category[]>([])
  const [data, setData] = useState<Category[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [modalAddOpen, setModalAddOpen] = useState(false)
  const { register, getValues } = useForm()

  const handleAdd = () => {
    alert(getValues('brandName'))
    setModalAddOpen(false)
  }

  const handleSearch = (searchValue: string) => {
    let temp = fullData.current.filter((value) => value.name.toLowerCase().includes(searchValue))
    setData(temp)
  }

  useEffect(() => {
    fullData.current = categoryMocks.map((row) => ({
      id: row.id,
      name: row.name,
    }))
    setData(fullData.current)
    setLoading(false)
  }, [])

  return (
    <>
      <Modal
        onClose={() => setModalAddOpen(false)} onOpen={() => setModalAddOpen(true)}
        open={modalAddOpen} trigger={<Button color='grey'>Add</Button>} size='mini'
      >
        <Modal.Content>
          <Header>New Category</Header>
          <Input><input placeholder='Enter a brand' {...register('cateName')} /></Input>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={() => setModalAddOpen(false)}>Cancel</Button>
          <Button content="Add" onClick={handleAdd} color='grey' />
        </Modal.Actions>
      </Modal>
      <div style={{ width: '50%', margin: '0 auto 0 auto' }}>
        <SearchBar onChange={handleSearch} align='left' />
        <DataTable columns={columns} data={data} pagination />
      </div>
    </>
  );
};

export default CategoryTable;
