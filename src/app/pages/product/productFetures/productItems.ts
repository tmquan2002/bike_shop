import brandsMock from '../../../assets/mocks/brands.json'
import categoriesMock from '../../../assets/mocks/categories.json'
import { ProductForm } from "../../../models/product-info";
import { InputProps } from "../../../models/form-field";

export const brandOptions = brandsMock.map((item) => ({
    desc: item.name, value: item.name
}))

export const categoryOptions = categoriesMock.map((item) => ({
    desc: item.name, value: item.name
}))

export const formFields: InputProps[] = [
    { name: 'name', type: 'text', label: 'Name', placeholder: 'Bicycle 2011', value: '' },
    { name: 'modelYear', type: 'number', label: 'Model Year', placeholder: '2011', value: 2011 },
    { name: 'brand', type: 'select', label: 'Brand', placeholder: '---Choose a brand---', options: brandOptions, value: brandsMock[0].name },
    { name: 'category', type: 'select', label: 'Category', placeholder: '---Choose a category---', options: categoryOptions, value: categoriesMock[0].name },
    { name: 'listPrice', type: 'number', label: 'List Price', placeholder: '344.29', value: 0, step: 0.01 },
]

export const defaultValues: ProductForm = {
    name: '',
    modelYear: 2011,
    brand: brandsMock[0].name,
    category: categoriesMock[0].name,
    listPrice: 0,
}