import { ProductInfo } from "./product-info";
import { StoreInfo } from "./store-info";

export interface StockInfo {
    store: StoreInfo;
    product: ProductInfo;
    quantity: number;
}