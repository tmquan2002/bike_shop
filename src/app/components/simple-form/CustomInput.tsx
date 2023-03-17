import { useFormContext } from 'react-hook-form'
import { Form } from 'semantic-ui-react'
import { CustomInputProps } from '../../models/form-field'

export const CustomInput = ({ name, label, ...props }: CustomInputProps) => {
    const {
        register,
    } = useFormContext()

    const id = `${name}-${props.type}-${label}`

    return (
        <Form.Field>
            <label htmlFor={id}>{label}</label>
            <input
                {...register(name)}
                {...props}
                id={id}
            />
        </Form.Field>
    )
}