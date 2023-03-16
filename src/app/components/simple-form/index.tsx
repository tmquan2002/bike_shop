import React, { useEffect, useCallback } from 'react';
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
  const { handleSubmit, formState: { errors }, register, control, getValues } = useForm<T>(defaultValues)
  type InputType = FormField<T, K>['inputType'];

  // Normal input
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
      <Controller
        key={String(name)}
        control={control}
        name={name as Path<T>}
        render={({ field }): React.ReactElement => (
          <Form.Field key={name}>
            <label htmlFor={name}>{label}</label>
            <input placeholder={placeholder} type={inputType} required={required} value={field.value}
              onChange={field.onChange}
            />
          </Form.Field>
        )}
      />
    ),
    [register, errors],
  );

  //Select field
  const select = useCallback(
    (
      key: K,
      name: string,
      options: DropdownItemProps[],
      label?: string,
      hidden?: boolean,
      required?: boolean,
      placeholder?: string,
    ) => (
      <Controller
        key={String(name)}
        control={control}
        name={name as Path<T>}
        render={({ field }): React.ReactElement => {
          return (
            <div key={name}>
              <label htmlFor={name}><strong>{label}</strong></label>
              <Select
                fluid
                search
                deburr
                placeholder={placeholder}
                options={options}
                value={field.value}
                onChange={(e, d): void => field.onChange(d.value)}
                onBlur={field.onBlur}
              />
              <br></br>
            </div>
          );
        }}
      />
    ),
    [control, errors],
  );

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {formFields.map((f) => {
        switch (f.type) {
          case 'select':
            return select(
              f.key,
              f.name,
              f.options ?? [],
              f.label,
              f.hidden,
              f.required,
              f.placeholder,
            );
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
