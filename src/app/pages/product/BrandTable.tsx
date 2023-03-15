import DataTable, { ColumnType } from '../../components/data-table/index';
import React, { useState } from 'react';
import brandMocks from '../../assets/mocks/brands.json'
import { Button, Header, Input, Modal } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';

interface Brand {
  id: number;
  name: string;
}

const columns: ColumnType<Brand, keyof Brand>[] = [
  { key: 'name', header: 'Name' },
]
const data: Brand[] = brandMocks.map((row) => ({
  id: row.id,
  name: row.name,
}))

const BrandTable: React.FC = () => {
  const [modelAddOpen, setModelAddOpen] = useState(false)
  const { register, getValues } = useForm()

  const handleAdd = () => {
    alert(getValues('brandName'))
    setModelAddOpen(false)
  }

  return (
    <>
      <Modal
        onClose={() => setModelAddOpen(false)} onOpen={() => setModelAddOpen(true)}
        open={modelAddOpen} trigger={<Button color='grey'>Add</Button>} size='mini'
      >
        <Modal.Content>
          <Header>New brand</Header>
          <Input><input placeholder='Enter a brand' {...register('brandName')} /></Input>
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

export default BrandTable;
