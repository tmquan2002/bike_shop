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

export interface ProductForm {
    productName: string;
    brand: string;
    category: string;
    modelYear: number;
    listPrice: number;
}