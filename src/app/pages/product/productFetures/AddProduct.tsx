import { SubmitHandler } from "react-hook-form";
import React from 'react';
import brandsMock from '../../../assets/mocks/brands.json'
import categoriesMock from '../../../assets/mocks/categories.json'
import { ProductForm } from "../../../models/product-info";
import { FormField } from "../../../models/form-field";
import SimpleForm from "../../../components/simple-form/index";

const brandOptions = brandsMock.map((item) => ({
  key: item.id, text: item.name, value: item.name
}))

const categoryOptions = categoriesMock.map((item) => ({
  key: item.id, text: item.name, value: item.name
}))

const formfields: FormField<ProductForm, keyof ProductForm>[] = [
  { key: 'name', name: 'name', type: 'input', inputType: 'text', label: 'Name', placeholder: 'Bicycle 2011', required: true },
  { key: 'modelYear', name: 'modelYear', type: 'input', inputType: 'number', label: 'Model Year', placeholder: '2011', min: 1900, max: new Date().getFullYear(), step: 1, required: true },
  { key: 'brand', name: 'brand', type: 'select', label: 'Brand', placeholder: 'Choose a brand', options: brandOptions, required: true },
  { key: 'category', name: 'category', type: 'select', label: 'Category', placeholder: 'Choose a category', options: categoryOptions, required: true },
  { key: 'listPrice', name: 'listPrice', type: 'input', inputType: 'number', label: 'List Price (USD)', placeholder: '344.29', min: 0, step: 0.01, required: true },
]

const defaultValues = {
  name: '',
  modelYear: 2011,
  brand: brandsMock[0].name,
  category: categoriesMock[0].name,
  listPrice: 0,
}

const AddProduct: React.FC = () => {
  const onSubmit: SubmitHandler<ProductForm> = (data) => {
    alert(JSON.stringify({ data }))
  };
  return (
    <SimpleForm formFields={formfields} onSubmit={onSubmit} defaultValues={defaultValues} />
  );
};

export default AddProduct;