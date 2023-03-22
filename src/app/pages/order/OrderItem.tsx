import { Dispatch, SetStateAction } from 'react';
import DataTable, { ColumnType } from '@components/data-table/index';
import orderMocks from '@assets/mocks/orders.json'
import { Button, Icon } from 'semantic-ui-react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import SearchBar from '@components/search-bar/SearchBar';

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
  const fullData = useRef<OrderItemType[]>(index !== -1 ? orderMocks[index].detail : [])
  const [data, setData] = useState<OrderItemType[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const backToOrderList = (id: number) => {
    setCurrentItemID(id)
    setCurrentView('order')
  }

  const handleSearch = (searchValue: string) => {
    let temp = fullData.current.filter((value) => value.product.toLowerCase().includes(searchValue))
    setData(temp)
  }

  useEffect(() => {
    setData(fullData.current)
    setLoading(false)
    // setTimeout(() => {
    //   setLoading(false)
    // }, 1000)
  }, [])

  return (
    <>
      <Button color='grey' onClick={() => backToOrderList(1)}>
        <Icon name='arrow left' inverted />Back
      </Button>

      <SearchBar onChange={handleSearch} />
      <DataTable columns={columns} data={data} loading={loading} />
    </>
  );
};

export default OrderItem;
