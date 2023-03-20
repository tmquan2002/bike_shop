import { FormProvider, useForm } from 'react-hook-form'
import { Button, Form } from 'semantic-ui-react'
import { InputProps } from '@app/models/form-field'
import { CustomInput } from './CustomInput'
import { CustomSelect } from './CustomSelect'

interface Props {
  /**Call your function when submit */
  onSubmit: (data: unknown) => void
  /**Submit text (default is Submit) */
  labelButtonSubmit?: string
  /**Form title */
  titleForm?: string
  /**Default Values */
  initialValues: unknown
  /**An array of inputs*/
  inputs: InputProps[]
}

export const SimpleForm = ({ ...props }: Props) => {
  const {
    initialValues,
    inputs,
    onSubmit,
    labelButtonSubmit = 'Submit',
    titleForm
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
      {titleForm && <div className='table-title'>{titleForm}</div>}
      <Form onSubmit={formMethods.handleSubmit(onSubmit)}>
        {createInputs()}
        <Button type='submit' size='large' color='grey'>{labelButtonSubmit}</Button>
      </Form>
    </FormProvider>
  )
}