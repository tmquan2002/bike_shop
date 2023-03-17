import React from 'react';
import { SimpleForm } from "../../../components/simple-form/index";
import { defaultValues } from "./productItems";
import { formFields } from './productItems';

const AddProduct: React.FC = () => {
  const onSubmit = (data: unknown) => {
    alert(JSON.stringify({ data }))
  };
  return (
    <SimpleForm inputs={formFields} onSubmit={onSubmit} initialValues={defaultValues} />
  );
};

export default AddProduct;