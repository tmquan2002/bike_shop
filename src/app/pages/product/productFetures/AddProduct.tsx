import React from 'react';
import { SimpleForm } from "@components/simple-form/index";
import { defaultValues, formFields } from "./productItems";

const AddProduct: React.FC = () => {
  const onSubmit = (data: unknown) => {
    alert(JSON.stringify({ data }))
  };
  return (
    <SimpleForm inputs={formFields} onSubmit={onSubmit} initialValues={defaultValues} />
  );
};

export default AddProduct;