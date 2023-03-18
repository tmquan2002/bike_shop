import { Dispatch, SetStateAction } from 'react';
import DataTable, { ColumnType } from '../../../components/data-table/index';
import storeMocks from '../../../assets/mocks/stores.json'
import { Button, Header, Icon, Input, Modal, Segment } from 'semantic-ui-react';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

interface StoreStock {
  id: number;
  name: string;
  quantity: number;
  detail: React.ReactNode;
}

interface StockItemProps {
  /**Id of the order */
  id: number,
  /**Current feature hook */
  setCurrentView: Dispatch<SetStateAction<string>>
}

const columns: ColumnType<StoreStock, keyof StoreStock>[] = [
  { key: 'name', header: 'Name' },
  { key: 'quantity', header: 'Quantity' },
  { key: 'detail', header: '' }
]

const emptyList = <>
  <Segment placeholder textAlign='center'>
    <Header >
      This store doesn't have any products
    </Header>
  </Segment>
</>

//Main component
const StocksTable = ({ id, setCurrentView }: StockItemProps): JSX.Element => {

  const [data, setData] = useState<StoreStock[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  //Modal
  const [modalOpen, setModalOpen] = useState(false)
  const { register, getValues, setValue } = useForm()

  const handleSubmit = () => {
    alert("Quantity: " + getValues("quantity"))
    setModalOpen(false)
  }

  const handleUpdateModal = (id: number, quantity: number) => {
    setModalOpen(true)
    setValue("id", id)
    setValue("quantity", quantity)
  }

  //Get stocks based on store id
  const index = storeMocks.findIndex(item => {
    return item.id === id;
  });
  const temp = index !== -1 ? storeMocks[index].detail : []
  const node = index === -1 ? <div>Store Not Found</div> : data.length === 0 ? emptyList :
    <DataTable columns={columns} data={data} pagination={6} loading={loading} />

  useEffect(() => {
    setData(temp.map((row) => ({
      id: row.id,
      name: row.name,
      quantity: row.quantity,
      detail: <Button color='grey' onClick={() => handleUpdateModal(row.id, row.quantity)}><Icon inverted name='edit' />Edit</Button>
    })))
    setLoading(false)
  }, [])

  return (
    <>

      <div style={{ textAlign: 'right' }}>
        <Modal
          onClose={() => setModalOpen(false)}
          open={modalOpen} size='mini'
        >
          <Modal.Content>
            <Header>Edit Quantity</Header>
            <Input><input placeholder='Enter quantity' type="number" {...register('quantity')} /></Input>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={() => setModalOpen(false)}>Cancel</Button>
            <Button content="Edit" onClick={handleSubmit} color='grey' />
          </Modal.Actions>
        </Modal>
      </div>

      {node}
    </>
  );
};

export default StocksTable;
