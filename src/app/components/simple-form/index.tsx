import { FormProvider, useForm } from 'react-hook-form'
import { Button, Form } from 'semantic-ui-react'
import { InputProps } from '../../models/form-field'
import { CustomInput } from './CustomInput'
import { CustomSelect } from './CustomSelect'

interface Props {
  onSubmit: (data: unknown) => void
  labelButtonSubmit?: string
  titleForm?: string

  initialValues: unknown
  inputs: InputProps[]
}

export const SimpleForm = ({ ...props }: Props) => {
  const {
    initialValues,
    inputs,
    onSubmit,
    labelButtonSubmit = 'Submit'
  } = props

  const formMethods = useForm({
    defaultValues: { ...(initialValues as any) }
  })

  const createInputs = () =>
    inputs.map(({ validations, typeValue, value, ...inputProps }) => {
      switch (inputProps.type) {
        case 'select':
          return <CustomSelect {...inputProps} key={inputProps.name} />
        default:
          return <CustomInput {...inputProps} key={inputProps.name} />
      }
    })

  return (
    <FormProvider {...formMethods}>
      <Form onSubmit={formMethods.handleSubmit(onSubmit)}      >
        {createInputs()}
        <Button type='submit' size='large' color='grey'>{labelButtonSubmit ?? 'Submit'}</Button>
      </Form>
    </FormProvider>
  )
}