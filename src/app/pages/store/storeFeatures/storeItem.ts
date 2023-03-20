import stateMocks from '@assets/mocks/state.json'
import { InputProps } from "@app/models/form-field";
import { StoreForm } from '@app/models/store-info';

export const stateOptions = stateMocks.map((item) => ({
    text: item.text, key: item.value, value: item.value
}))

export const formFields: InputProps[] = [
    { name: 'name', type: 'text', label: 'Name', placeholder: 'Enter a name' },
    { name: 'phone', type: 'text', label: 'Phone', placeholder: '(000) 000-0000' },
    { name: 'email', type: 'text', label: 'Email', placeholder: 'Enter an email' },
    { name: 'street', type: 'text', label: 'Street', placeholder: 'Enter a street' },
    { name: 'city', type: 'text', label: 'City', placeholder: 'Enter a city' },
    { name: 'state', type: 'select', label: 'State', placeholder: '---Choose a state---', options: stateOptions },
    { name: 'zipCode', type: 'text', label: 'Zip Code', placeholder: 'Enter zipcode' },
]

export const defaultValues: StoreForm = {
    name: '',
    phone: '(000) 000-0000',
    email: '',
    street: '',
    city: '',
    state: stateMocks[0].value
}