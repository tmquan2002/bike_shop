import { BrandInfo } from "./brand-info";
import { CategoryInfo } from "./category-info";

export interface ProductInfo {
    id: number;
    productName: string;
    brand: BrandInfo;
    category: CategoryInfo;
    modelYear: number;
    listPrice: number;
}