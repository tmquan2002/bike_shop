import { formFields, defaultValues } from "./productItems";
import productsMocks from '../../../assets/mocks/products.json'
import { SimpleForm } from "../../../components/simple-form";

const UpdateProduct = ({ id }: { id: number }): JSX.Element => {
  const index = productsMocks.findIndex(item => {
    return item.id === id;
  });

  const values = index !== -1 ? {
    name: productsMocks[index].name,
    modelYear: productsMocks[index].modelYear,
    brand: productsMocks[index].brand,
    category: productsMocks[index].category,
    listPrice: productsMocks[index].listPrice
  } : defaultValues;

  const onSubmit = (data: unknown) => {
    alert(JSON.stringify({ data }))
  };
  return (
    <SimpleForm inputs={formFields} onSubmit={onSubmit} initialValues={values} />
  );
};

export default UpdateProduct;