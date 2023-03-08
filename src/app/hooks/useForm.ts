import { useState } from "react"
import { DropdownProps } from "semantic-ui-react";

export const useForm = (callback: any, initialState: {}) => {
    const [values, setValues] = useState(initialState);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    }

    const onChangeSelect = (event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => {
        setValues({ ...values, [data.name]: data.value });
    }

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await callback();
    }

    return { onChange, onChangeSelect, onSubmit, values }
}