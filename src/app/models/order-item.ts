import { OrderInfo } from "./order-info";
import { ProductInfo } from "./product-info";

export interface OrderItemInfo {
    id: number;
    order: OrderInfo;
    product: ProductInfo;
    quantity: number;
    listPrice: number;
    discount: number;
}