import { Dispatch, SetStateAction } from 'react';
import DataTable, { ColumnType } from '@components/data-table/index';
import orderMocks from '@assets/mocks/orders.json'
import { Button, Icon } from 'semantic-ui-react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import SearchBar from '@components/search-bar/SearchBar';
import { useBoolean } from '@app/hooks/use-state-custom';
import apiLinks from '@app/utils/api-links';

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

  const fullData = useRef<OrderItemType[]>([])
  const [data, setData] = useState<OrderItemType[]>([])
  const [loading, setLoading] = useBoolean(true)

  const backToOrderList = (id: number) => {
    setCurrentItemID(id)
    setCurrentView('order')
  }

  const handleSearch = (searchValue: string) => {
    let temp = fullData.current.filter((value) => value.product.toLowerCase().includes(searchValue))
    setData(temp)
  }

  useEffect(() => {
    async function fetchList() {
      const orderList = await fetch(apiLinks.order.getDetail + id)
        .then((res) => res.json())
        .catch((error) => { console.log(error) })
        console.log(orderList)
      if (orderList.status === 200) {
        fullData.current = orderList.orderItem[0]
      }
    }
    fetchList()
    setData(fullData.current)
    setLoading(false)
    // setTimeout(() => {
    //   setLoading(false)
    // }, 1000)
  }, [setLoading])

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
