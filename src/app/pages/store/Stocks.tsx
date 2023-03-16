import { Dispatch, SetStateAction } from 'react';
import DataTable, { ColumnType } from '../../components/data-table/index';
import storeMocks from '../../assets/mocks/stores.json'
import { Button, Header, Icon, Segment } from 'semantic-ui-react';

interface StoreStock {
  id: number;
  name: string;
  quantity: number;
  detail: React.ReactNode;
}

interface OrderItemProps {
  id: number,
  setCurrentView: Dispatch<SetStateAction<string>>,
  setCurrentStoreID: Dispatch<SetStateAction<number>>
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

const Stocks = ({ id, setCurrentView, setCurrentStoreID }: OrderItemProps): JSX.Element => {
  const index = storeMocks.findIndex(item => {
    return item.id === id;
  });
  const temp = index !== -1 ? storeMocks[index].detail : []
  const data = temp.map((row) => ({
    id: row.id,
    name: row.name,
    quantity: row.quantity,
    detail: <Button color='grey' ><Icon inverted name='edit' />Edit</Button>
  }))

  const node = index === -1 ? <div>Store Not Found</div> : data.length === 0 ?  emptyList  :
    <DataTable columns={columns} data={data} pagination={6} />

  const backToStoreList = (id: number) => {
    setCurrentStoreID(id)
    setCurrentView('store')
  }
  return (
    <>
      <Button color='grey' onClick={() => backToStoreList(1)}>
          <Icon name='arrow left' inverted/>Back
      </Button>
      {node}
    </>
  );
};

export default Stocks;
