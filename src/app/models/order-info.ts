import { CustomerInfo } from "./customer-info";
import { StaffInfo } from "./staff-info";
import { StoreInfo } from "./store-info";

export interface OrderInfo {
    Id: number;
    Customer: CustomerInfo;
    OrderStatus: number;
    OrderDate: Date;
    RequiredDate: Date;
    ShippedDate: Date;
    Store: StoreInfo;
    Staff: StaffInfo;
}