import { DropdownItemProps } from 'semantic-ui-react';
import { FieldValues } from 'react-hook-form';

export interface FormField<T extends FieldValues> {
  name: keyof Partial<T>;
  type?: 'input' | 'textarea' | 'select' | 'checkbox' | 'radio';
  label?: string;
  placeholder?: string;
  hidden?: boolean; // use for id field, select field, etc...
  multiple?: boolean; // use for select, etc...
  inputType?: 'text' | 'password' | 'number';
  options?: DropdownItemProps[];
  value?: string | number | boolean

  // validation
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  max?: number;
  min?: number;
  step?: number;
  pattern?: RegExp;
  validate?: Function | object;
}

export interface InputProps {
  type: 'text' | 'radio' | 'email' | 'password' | 'select' | 'checkbox' | 'number'
  name: string
  value: string | number | boolean
  placeholder?: string
  label?: string
  step?: number

  typeValue?: 'boolean' | 'number'
  validations?: Validation[]
  options?: Opt[]
}

export interface Opt {
  value: string | number
  desc: string
}

export interface Validation {
  type: 'required' | 'isEmail' | 'minLength' | 'isTrue' | 'oneOf'
  value?: string | number | boolean
  message: string
  ref?: string
}

export type CustomInputProps = Omit<InputProps, 'validations' | 'typeValue' | 'value'>