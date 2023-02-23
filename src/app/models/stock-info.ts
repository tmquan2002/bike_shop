import { ProductInfo } from "./product-info";
import { StoreInfo } from "./store-info";

export interface StockInfo {
    Store: StoreInfo;
    Product: ProductInfo;
    Quantity: number;
}