import { useFormContext } from 'react-hook-form'
import { Form } from 'semantic-ui-react'
import { CustomInputProps } from '@app/models/form-field'

export const CustomSelect = ({ name, label, options, ...props }: CustomInputProps) => {
	const {
		register,
	} = useFormContext()

	const id = `${name}-${props.type}-${label}`

	return (
		<Form.Field>
			<label htmlFor={id}>{label}</label>
			<select {...register(name)} {...props} id={id}>
				<option value=''>{props.placeholder}</option>
				{options &&
					options.map(({ key, value, text }) => (
						<option key={key} value={value}>
							{text}
						</option>
					))}
			</select>
		</Form.Field>
	)
}