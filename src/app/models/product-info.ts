import { BrandInfo } from "./brand-info";
import { CategoryInfo } from "./category-info";
import brandsMock from '../assets/mocks/brands.json'
import categoriesMock from '../assets/mocks/categories.json'

export interface ProductInfo {
    id: number;
    productName: string;
    brand: BrandInfo;
    category: CategoryInfo;
    modelYear: number;
    listPrice: number;
}

export interface ProductForm {
    name: string;
    brand: string;
    category: string;
    modelYear: number;
    listPrice: number;
}