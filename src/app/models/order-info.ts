import { CustomerInfo } from "./customer-info";
import { StaffInfo } from "./staff-info";
import { StoreInfo } from "./store-info";

export interface OrderInfo {
    id: number;
    customer: CustomerInfo;
    orderStatus: number;
    orderDate: Date;
    requiredDate: Date;
    shippedDate: Date;
    store: StoreInfo;
    staff: StaffInfo;
}