import React from 'react';
import AppLayout from '../../components/app-layout';
import DataTable, { ColumnType } from '../../components/data-table/index';
import orderMocks from '../../assets/mocks/orders.json'
import { orderStateConverter } from '../../../app/utils/helpers';
import { OrderStatus } from 'app/utils/enum';

interface Order {
  id: number;
  customer?: string;
  status: OrderStatus;
  orderDate: string;
  requiredDate: string;
  shippedDate?: string;
  store: string;
  staff: string;
}

const columns: ColumnType<Order, keyof Order>[] = [
  { key: 'customer', header: 'Customer' },
  { key: 'status', header: 'Status' },
  { key: 'orderDate', header: 'Order Date' },
  { key: 'requiredDate', header: 'Required Date' },
  { key: 'shippedDate', header: 'Shipped Date' },
  { key: 'store', header: 'Store' },
  { key: 'staff', header: 'Staff' }
]
const data: Order[] = orderMocks.map((row) => ({
  id: row.id,
  customer: row.customer,
  status: orderStateConverter(row.status),
  orderDate: row.orderDate,
  requiredDate: row.requiredDate,
  shippedDate: row.shippedDate,
  store: row.store,
  staff: row.staff
}))

const orderTable = <DataTable columns={columns} data={data} pagination/>

const ManageOrderPage: React.FC = () => {
  return (
    <AppLayout children={orderTable} routerPath='order' />
  );
};

export default ManageOrderPage;
