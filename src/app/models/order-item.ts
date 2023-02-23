import { OrderInfo } from "./order-info";
import { ProductInfo } from "./product-info";

export interface OrderItemInfo {
    Id: number;
    Order: OrderInfo;
    Product: ProductInfo;
    Quantity: number;
    ListPrice: number;
    Discount: number;
}