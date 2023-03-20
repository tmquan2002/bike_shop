import { SimpleForm } from "@components/simple-form/index";
import { defaultValues, formFields } from "./storeItem";
import storesMocks from '@assets/mocks/stores.json'

const UpdateStore = ({ id }: { id: number }): JSX.Element => {
  const index = storesMocks.findIndex(item => {
    return item.id === id;
  });

  const values = index !== -1 ? {
    name: storesMocks[index].name,
    phone: storesMocks[index].phone,
    email: storesMocks[index].email,
    street: storesMocks[index].street,
    city: storesMocks[index].city,
    state: storesMocks[index].state,
    zipCode: storesMocks[index].zipCode
  } : defaultValues;

  const onSubmit = (data: unknown) => {
    alert(JSON.stringify({ data }))
  };

  return (
    <SimpleForm inputs={formFields} onSubmit={onSubmit} initialValues={values} titleForm="Edit Store"/>
  );
};

export default UpdateStore;