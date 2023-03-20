export interface InputProps {
  type: 'text' | 'radio' | 'email' | 'password' | 'select' | 'checkbox' | 'number'
  name: string
  value?: string | number | boolean
  placeholder?: string
  label?: string
  step?: number

  typeValue?: 'boolean' | 'number'
  validations?: Validation[]
  options?: Opt[]
}

export interface Opt {
  key: string
  value: string | number
  text: string
}

export interface Validation {
  type: 'required' | 'isEmail' | 'minLength' | 'isTrue' | 'oneOf'
  value?: string | number | boolean
  message: string
  ref?: string
}

export type CustomInputProps = Omit<InputProps, 'validations' | 'typeValue' | 'value'>