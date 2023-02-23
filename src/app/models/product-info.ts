import { BrandInfo } from "./brand-info";
import { CategoryInfo } from "./category-info";

export interface ProductInfo {
    Id: number;
    ProductName: string;
    Brand: BrandInfo;
    Category: CategoryInfo;
    ModelYear: number;
    ListPrice: number;
}