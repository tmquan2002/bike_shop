import { DropdownItemProps } from 'semantic-ui-react';

export interface FormField<T, K extends keyof T> {
  key: K
  name: string;
  type?: 'input' | 'textarea' | 'select' | 'checkbox' | 'radio' ;
  label?: string;
  placeholder?: string;
  hidden?: boolean; // use for id field, select field, etc...
  multiple?: boolean; // use for select, etc...
  inputType?: 'text' | 'password' | 'number';
  options?: DropdownItemProps[];

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
