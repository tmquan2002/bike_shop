import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Button, DropdownProps, Form } from 'semantic-ui-react';
import brandsMock from '../assets/mocks/brands.json'
import categoriesMock from '../assets/mocks/categories.json'

const brandOptions = brandsMock.map((item) => ({
  key: item.id, text: item.name, value: item.name
}))

const categoryOptions = categoriesMock.map((item) => ({
  key: item.id, text: item.name, value: item.name
}))

const formData = [
  { type: 'text', label: 'Name', placeholder: 'Bicycle 2011' },
  { type: 'number', label: 'Model Year', placeholder: 2011, min: 1900, max: new Date().getFullYear(), step: 1 },
  { type: 'text', label: 'Name', placeholder: 'Bicycle 2011' },
  { type: 'text', label: 'Name', placeholder: 'Bicycle 2011' },
  { type: 'number', label: 'List Price (USD)', placeholder: 344.29, min: 0, step: 0.01 },
]

const HomePage: React.FC = () => {
  const [values, setValues] = useState({
    name: '',
    modelYear: 1900,
    brand: brandsMock[0].name,
    category: categoriesMock[0].name,
    listPrice: 0,
  })
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleChangeSelect = (event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps): void => {
    setValues(prevValues => ({
      ...prevValues,
      [data.name]: data.value
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(values)
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input fluid type='text' label='Name' placeholder='Bicycle 2011' name='name' onChange={handleChange} />
      <Form.Input fluid type='number' label='Model Year' placeholder={2011} min={1900} max={new Date().getFullYear()} step={1} name='modelYear' onChange={handleChange} />
      <Form.Select options={brandOptions} label="Brand" defaultValue={brandsMock[0].name} name='brand' onChange={handleChangeSelect} />
      <Form.Select options={categoryOptions} label="Category" defaultValue={categoriesMock[0].name} name='category' onChange={handleChangeSelect} />
      <Form.Input fluid type="number" label='List Price (USD)' placeholder='344.29' min={0} step={0.01} name='listPrice' onChange={handleChange} />
      <Button type='submit'>Submit</Button>
    </Form>
  );
};

export default HomePage;
