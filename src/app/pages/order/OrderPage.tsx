import React, { Dispatch, SetStateAction, useState, useEffect, useCallback } from 'react';
import DataTable, { ColumnType } from '@components/data-table/index';
import { orderStateConverter } from '@app/utils/helpers';
import { OrderStatus } from '@app/utils/enum';
import { Button } from 'semantic-ui-react';
import SearchBar from '@app/components/search-bar/SearchBar';
import { useRef } from 'react';
import { useBoolean } from '@app/hooks/use-state-custom';
import apiLinks from '@app/utils/api-links';

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
  const [loading, setLoading] = useBoolean(true)

  const handleSearch = (searchValue: string) => {
    let temp = fullData.current.filter((value) => value.customer?.toLowerCase().includes(searchValue))
    setData(temp)
  }

  const handleDetail = useCallback((id: number) => {
    console.log(id)
    setCurrentItemID(id)
    setCurrentView('items')
  }, [setCurrentItemID, setCurrentView])

  useEffect(() => {
    async function fetchList() {
      const orderList = await fetch(apiLinks.order.get)
        .then((res) => res.json())
        .catch((error) => { console.log(error) })
      if (orderList.status === 200) {
        fullData.current = orderList.orders[0].map((row: any) => ({
          id: row.id,
          customer: row.customer,
          status: orderStateConverter(row.order_status),
          orderDate: row.order_date,
          requiredDate: row.required_date,
          shippedDate: row.shipped_date,
          store: row.store,
          staff: row.staff,
          detail: <Button color='grey' onClick={() => handleDetail(row.id)}>Detail</Button>
        }))
      }
    }
    fetchList()
    setData(fullData.current)
    setLoading(false)
  }, [handleDetail, setLoading])

  return (
    <>
      <SearchBar onChange={handleSearch} />
      <DataTable columns={columns} data={data} pagination={8} loading={loading} title='Orders' />
    </>
  );
};

export default OrderPage;
