import DataTable, { ColumnType } from '../../components/data-table/index';
import React, { useState } from 'react';
import categoryMocks from '../../assets/mocks/categories.json'
import { Button, Header, Input, Modal } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';

interface Category {
  id: number;
  name: string;
}

const columns: ColumnType<Category, keyof Category>[] = [
  { key: 'name', header: 'Name' },
]
const data: Category[] = categoryMocks.map((row) => ({
  id: row.id,
  name: row.name,
}))

const CategoryTable: React.FC = () => {
  const [modelAddOpen, setModelAddOpen] = useState(false)
  const { register, getValues } = useForm()

  const handleAdd = () => {
    alert(getValues('cateName'))
    setModelAddOpen(false)
  }
  return (
    <>
      <Modal
        onClose={() => setModelAddOpen(false)} onOpen={() => setModelAddOpen(true)}
        open={modelAddOpen} trigger={<Button color='grey'>Add</Button>} size='mini'
      >
        <Modal.Content>
          <Header>New Category</Header>
          <Input><input placeholder='Enter a brand' {...register('cateName')} /></Input>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={() => setModelAddOpen(false)}>Cancel</Button>
          <Button content="Add" onClick={handleAdd} color='grey' />
        </Modal.Actions>
      </Modal>
      <DataTable columns={columns} data={data} pagination />
    </>
  );
};

export default CategoryTable;
