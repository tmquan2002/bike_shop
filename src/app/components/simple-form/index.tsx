import React, { useEffect, useCallback, PropsWithChildren } from 'react';
import { Form, Select, DropdownItemProps, Checkbox, Button } from 'semantic-ui-react';
import { useForm, Controller, FieldValues, SubmitHandler, Path } from 'react-hook-form';

import { FormField } from '../../models/form-field';

interface FormProps<T extends FieldValues, K extends keyof T> {
  formFields: FormField<T, K>[];
  onSubmit: SubmitHandler<T>;
  defaultValues?: T;
  loading?: boolean;
  confirmButtonLabel?: string;
  errors?: {
    [k: string]: string | string[];
  };
}

const SimpleForm = <T extends FieldValues, K extends keyof T>({ formFields, onSubmit, defaultValues }: FormProps<T, K>): JSX.Element => {
  const { handleSubmit, formState: { errors }, register } = useForm<T>(defaultValues)
  type InputType = FormField<T, K>['inputType'];

  const input = useCallback(
    (
      key: K,
      name: string,
      label?: string,
      placeholder?: string,
      hidden?: boolean,
      inputType?: InputType,
      required?: boolean,
    ) => (
      <Form.Field>
        <label>{label}</label>
        <input placeholder={placeholder} type={inputType} required={required}
          {...register(name as Path<T>)}
        />
      </Form.Field>
    ),
    [register, errors],
  );
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {formFields.map((f) => {
        switch (f.type) {
          case 'input':
          default:
            return input(
              f.key,
              f.name,
              f.label,
              f.placeholder,
              f.hidden,
              f.inputType,
              f.required,
            );
        }
      })}
      <Button type='submit' size='large' color='grey'>Submit</Button>
    </Form>
  )
};

export default SimpleForm;
