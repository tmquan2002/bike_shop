import { useForm, SubmitHandler } from "react-hook-form";
import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import brandsMock from '../assets/mocks/brands.json'
import categoriesMock from '../assets/mocks/categories.json'
import { ProductForm } from "../models/product-info";

const brandOptions = brandsMock.map((item) => ({
  key: item.id, text: item.name, value: item.name
}))

const categoryOptions = categoriesMock.map((item) => ({
  key: item.id, text: item.name, value: item.name
}))

// const formData = [
//   { type: 'text', label: 'Name', placeholder: 'Bicycle 2011' },
//   { type: 'number', label: 'Model Year', placeholder: 2011, min: 1900, max: new Date().getFullYear(), step: 1 },
//   { type: 'text', label: 'Name', placeholder: 'Bicycle 2011' },
//   { type: 'text', label: 'Name', placeholder: 'Bicycle 2011' },
//   { type: 'number', label: 'List Price (USD)', placeholder: 344.29, min: 0, step: 0.01 },
// ]

const HomePage: React.FC = () => {
  const { handleSubmit, setValue } = useForm<ProductForm>({
    defaultValues: {
      name: '',
      modelYear: 2011,
      brand: brandsMock[0].name,
      category: categoriesMock[0].name,
      listPrice: 0,
    }
  });

  const onSubmit: SubmitHandler<ProductForm> = (data, e) => {
    alert(JSON.stringify({ data }))
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Input
        name="name" fluid label="Name" type='text' placeholder='Bicycle 2011' required
        onChange={async (e, { name, value }) => {
          setValue(name, value);
        }}
      />
      <Form.Input name="modelYear" fluid type='number' label='Model Year' placeholder={2011} required
        min={1900} max={new Date().getFullYear()} step={1}
        onChange={async (e, { name, value }) => {
          setValue(name, value);
        }}
      />
      <Form.Select name="brand" options={brandOptions} label="Brand" placeholder="Choose a brand" required
        onChange={async (e, { name, value }) => {
          setValue(name, value);
        }} />
      <Form.Select name="category" options={categoryOptions} label="Category" placeholder="Choose a category" required
        onChange={async (e, { name, value }) => {
          setValue(name, value);
        }} />
      <Form.Input name="listPrice" fluid type="number" label='List Price (USD)' placeholder='344.29' min={0} step={0.01} required
        onChange={async (e, { name, value }) => {
          setValue(name, value);
        }} />
      <Button type='submit' size='large' color='grey'>Submit</Button>
    </Form>
  );
};

export default HomePage;