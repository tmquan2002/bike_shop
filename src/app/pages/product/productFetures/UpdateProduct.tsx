import { useForm, SubmitHandler, Controller } from "react-hook-form";
import React from 'react';
import { ProductForm } from "../../../models/product-info";
import SimpleForm from "../../../components/simple-form/index";
import { formFields, defaultValues, brandOptions, categoryOptions } from "./FormFields";
import productsMocks from '../../../assets/mocks/products.json'
import { Button, Form, Select } from "semantic-ui-react";

const UpdateProduct = ({ id }: { id: number }): JSX.Element => {
  const index = productsMocks.findIndex(item => {
    return item.id === id;
  });

  const values = index !== -1 ? {
    name: productsMocks[index].name,
    modelYear: productsMocks[index].modelYear,
    brand: productsMocks[index].brand,
    category: productsMocks[index].category,
    listPrice: productsMocks[index].listPrice
  } : defaultValues;

  const onSubmit: SubmitHandler<ProductForm> = (data) => {
    alert(JSON.stringify({ data }))
  };

  // return (
  //   <SimpleForm formFields={formFields} onSubmit={onSubmit} defaultValues={values} />
  // );
  const { control, handleSubmit } = useForm<ProductForm>({
    defaultValues: values
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Form.Field>
            <label htmlFor='name'>Name</label>
            <input
              onChange={onChange} // send value to hook form
              onBlur={onBlur} // notify when input is touched
              value={value} // return updated value
              ref={ref} // set ref for focus management
            />
          </Form.Field>
        )}
      />
      <Controller
        control={control}
        name="modelYear"
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Form.Field>
            <label htmlFor='modelYear'>Model Year</label>
            <input
              onChange={onChange} // send value to hook form
              onBlur={onBlur} // notify when input is touched
              value={value} // return updated value
              ref={ref} // set ref for focus management
            />
          </Form.Field>
        )}
      />
      <Controller
        control={control}
        name="brand"
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Form.Field>
            <label htmlFor='brand'>Brand</label>
            <Select
              fluid
              search
              deburr
              placeholder="Choose a brand"
              options={brandOptions}
              value={value}
              onChange={(e, d): void => onChange(d.value)}
              onBlur={onBlur}
              ref={ref}
            />
          </Form.Field>
        )}
      />
      <Controller
        control={control}
        name="category"
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Form.Field>
            <label htmlFor='category'>Category</label>
            <Select
              fluid
              search
              deburr
              placeholder="Choose a category"
              options={categoryOptions}
              value={value}
              onChange={(e, d): void => onChange(d.value)}
              onBlur={onBlur}
              ref={ref}
            />
          </Form.Field>
        )}
      />
      <Controller
        control={control}
        name="listPrice"
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Form.Field>
            <label htmlFor='listPrice'>List Price</label>
            <input
              type="number"
              onChange={onChange} // send value to hook form
              onBlur={onBlur} // notify when input is touched
              value={value} // return updated value
              ref={ref} // set ref for focus management
            />
          </Form.Field>
        )}
      />
      <Button type='submit' size='large' color='grey'>Submit</Button>
    </Form>
  );
};

export default UpdateProduct;