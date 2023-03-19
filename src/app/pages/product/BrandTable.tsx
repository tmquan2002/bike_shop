import DataTable, { ColumnType } from '@components/data-table/index';
import React, { useState } from 'react';
import brandMocks from '@assets/mocks/brands.json'
import { Button, Header, Input, Modal } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import SearchBar from '@app/components/search-bar/SearchBar';
import { useRef } from 'react';
import { useEffect } from 'react';

interface Brand {
  id: number;
  name: string;
}

const columns: ColumnType<Brand, keyof Brand>[] = [
  { key: 'name', header: 'Name' },
]

const BrandTable: React.FC = () => {
  const fullData = useRef<Brand[]>([])
  const [data, setData] = useState<Brand[]>([])
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
    fullData.current = brandMocks.map((row) => ({
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
          <Header>New brand</Header>
          <Input><input placeholder='Enter a brand' {...register('brandName')} /></Input>
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

export default BrandTable;
