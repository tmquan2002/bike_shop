import { Dispatch, SetStateAction } from 'react';
import DataTable, { ColumnType } from '@components/data-table/index';
import storeMocks from '@assets/mocks/stores.json'
import { Button, Header, Icon, Input, Modal, Segment } from 'semantic-ui-react';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import SearchBar from '@app/components/search-bar/SearchBar';

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

const EmptyList = ({ text }: { text: string }): JSX.Element => {
  return (
    <Segment placeholder textAlign='center'>
      <Header >
        {text}
      </Header>
    </Segment>
  )
}

//Main component
const StocksTable = ({ id, setCurrentView }: StockItemProps): JSX.Element => {
  //Get stocks based on store id
  const index = storeMocks.findIndex(item => {
    return item.id === id;
  });
  const fullData = useRef<StoreStock[]>([])
  const [data, setData] = useState<StoreStock[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  //Modal
  const [modalOpen, setModalOpen] = useState(false)
  const { register, getValues, setValue } = useForm()

  const handleSubmitModal = () => {
    alert("Quantity: " + getValues("quantity"))
    setModalOpen(false)
  }

  const handleUpdateModal = (id: number, quantity: number) => {
    setModalOpen(true)
    setValue("id", id)
    setValue("quantity", quantity)
  }

  //Search
  const handleSearch = (searchValue: string) => {
    let temp = fullData.current.filter((value) => value.name.toLowerCase().includes(searchValue))
    setData(temp)
  }

  useEffect(() => {
    if (index != -1) {
      fullData.current = storeMocks[index].detail.map((row) => ({
        id: row.id,
        name: row.name,
        quantity: row.quantity,
        detail: <Button color='grey' onClick={() => handleUpdateModal(row.id, row.quantity)}><Icon inverted name='edit' />Edit</Button>
      }))
    }
    setData(fullData.current)
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
            <Button content="Edit" onClick={handleSubmitModal} color='grey' />
          </Modal.Actions>
        </Modal>
      </div>
      {index === -1 ? <EmptyList text='Store not found' /> : fullData.current.length === 0 ? <EmptyList text="This store doesn't have any products" /> :
        <>
          <SearchBar onChange={handleSearch} placeholder="Search name..." />
          <DataTable columns={columns} data={data} pagination={6} loading={loading} />
        </>
      }
    </>
  );
};

export default StocksTable;
