import { useForm } from '../../app/hooks/useForm';
import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import brandsMock from '../assets/mocks/brands.json'
import categoriesMock from '../assets/mocks/categories.json'

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

  const initialState = {
    name: '',
    modelYear: 1900,
    listPrice: 0,
  }

  const { onChange, onSubmit, values } = useForm(
    handleSubmit,
    initialState
  )

  async function handleSubmit() {
    console.log(values)
  }

  return (
    <Form onSubmit={onSubmit}>
      <Form.Input fluid type='text' label='Name' placeholder='Bicycle 2011' name='name' onChange={onChange} />
      <Form.Input fluid type='number' label='Model Year' placeholder={2011} min={1900} max={new Date().getFullYear()} step={1} name='modelYear' onChange={onChange} />
      <Form.Select options={brandOptions} label="Brand" />
      <Form.Select options={categoryOptions} label="Category"/>
      <Form.Input fluid type="number" label='List Price (USD)' placeholder='344.29' min={0} step={0.01} name='listPrice' onChange={onChange} />
      <Button type='submit' size='large' color='grey'>Submit</Button>
    </Form>
  );
};

export default HomePage;