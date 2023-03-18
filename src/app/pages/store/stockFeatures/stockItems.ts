import productsMock from '../../../assets/mocks/products.json'
import { InputProps } from "../../../models/form-field";
import { StockForm } from 'app/models/stock-info';

export const productOptions = productsMock.map((item) => ({
    text: item.name, key: item.name, value: item.name
}))

export const formFields: InputProps[] = [
    { name: 'name', type: 'select', label: 'Name', placeholder: '---Choose a product---', options: productOptions, value: productsMock[0].name },
    { name: 'quantity', type: 'number', label: 'Quantity', placeholder: 'Enter quantity', value: 0 },
]

export const defaultValues: StockForm = {
    name: productsMock[0].name,
    quantity: 0,
}