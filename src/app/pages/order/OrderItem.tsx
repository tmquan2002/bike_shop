import { Dispatch, SetStateAction } from 'react';
import DataTable, { ColumnType } from '@components/data-table/index';
import orderMocks from '@assets/mocks/orders.json'
import { Button, Icon } from 'semantic-ui-react';

interface OrderItemType {
  id: number;
  product: string;
  quantity: number;
  listPrice: number;
  discount: number;
}

interface OrderItemProps {
  id: number,
  setCurrentView: Dispatch<SetStateAction<string>>,
  setCurrentItemID: Dispatch<SetStateAction<number>>
}

const columns: ColumnType<OrderItemType, keyof OrderItemType>[] = [
  { key: 'product', header: 'Product' },
  { key: 'quantity', header: 'Quantity' },
  { key: 'listPrice', header: 'List Price' },
  { key: 'discount', header: 'Discount' }
]

const OrderItem = ({ id, setCurrentView, setCurrentItemID }: OrderItemProps): JSX.Element => {
  const index = orderMocks.findIndex(item => {
    return item.id === id;
  });
  const data = index !== -1 ? orderMocks[index].detail : []
  const node = index !== -1 ? <DataTable columns={columns} data={data} /> : <div>Cannot found any order with this ID</div>
  const backToOrderList = (id: number) => {
    setCurrentItemID(id)
    setCurrentView('order')
  }
  return (
    <>
      <Button color='grey' onClick={() => backToOrderList(1)}>
          <Icon name='arrow left' inverted/>Back
      </Button>
      {node}
    </>
  );
};

export default OrderItem;
