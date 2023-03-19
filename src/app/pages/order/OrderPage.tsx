import React, { Dispatch, SetStateAction, useState, useEffect } from 'react';
import DataTable, { ColumnType } from '@components/data-table/index';
import orderMocks from '@assets/mocks/orders.json'
import { orderStateConverter } from '@app/utils/helpers';
import { OrderStatus } from '@app/utils/enum';
import { Button } from 'semantic-ui-react';
import SearchBar from '@app/components/search-bar/SearchBar';
import { useRef } from 'react';

interface Order {
  id: number;
  customer?: string;
  status: OrderStatus;
  orderDate: string;
  requiredDate: string;
  shippedDate?: string;
  store: string;
  staff: string;
  detail: React.ReactNode;
}

interface OrderPageProps {
  setCurrentView: Dispatch<SetStateAction<string>>,
  setCurrentItemID: Dispatch<SetStateAction<number>>
}

const columns: ColumnType<Order, keyof Order>[] = [
  { key: 'customer', header: 'Customer' },
  { key: 'status', header: 'Status' },
  { key: 'orderDate', header: 'Order Date' },
  { key: 'requiredDate', header: 'Required Date' },
  { key: 'shippedDate', header: 'Shipped Date' },
  { key: 'store', header: 'Store' },
  { key: 'staff', header: 'Staff' },
  { key: 'detail', header: '' }
]

const OrderPage = ({ setCurrentView, setCurrentItemID }: OrderPageProps): JSX.Element => {
  const fullData = useRef<Order[]>([])
  const [data, setData] = useState<Order[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const handleSearch = (searchValue: string) => {
    let temp = fullData.current.filter((value) => value.customer?.toLowerCase().includes(searchValue))
    setData(temp)
  }

  useEffect(() => {
    setLoading(false)
    fullData.current = orderMocks.map((row) => ({
      id: row.id,
      customer: row.customer,
      status: orderStateConverter(row.status),
      orderDate: row.orderDate,
      requiredDate: row.requiredDate,
      shippedDate: row.shippedDate,
      store: row.store,
      staff: row.staff,
      detail: <Button color='grey' onClick={() => handleDetail(row.id)}>Detail</Button>
    }))
    setData(fullData.current)
    setLoading(false)
  }, [])

  const handleDetail = (id: number) => {
    setCurrentItemID(id)
    setCurrentView('items')
  }

  return (
    <>
      <SearchBar onChange={handleSearch} />
      <DataTable columns={columns} data={data} pagination={8} loading={loading} title='Orders' />
    </>
  );
};

export default OrderPage;
