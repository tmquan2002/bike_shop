import { SubmitHandler } from "react-hook-form";
import React from 'react';
import { ProductForm } from "../../../models/product-info";
import SimpleForm from "../../../components/simple-form/index";
import { formFields, defaultValues } from "./FormFields";

const AddProduct: React.FC = () => {
  const onSubmit: SubmitHandler<ProductForm> = (data) => {
    alert(JSON.stringify({ data }))
  };
  return (
    <SimpleForm formFields={formFields} onSubmit={onSubmit} defaultValues={defaultValues} />
  );
};

export default AddProduct;