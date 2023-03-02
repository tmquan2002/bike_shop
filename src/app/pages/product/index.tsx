import AppLayout from '../../components/app-layout';
import ProductTable from './ProductTable';
import BrandTable from './BrandTable';
import CategoryTable from './CategoryTable';
import CustomMenu, { CustomMenuObject } from '../../components/custom-menu';

const menuItems: CustomMenuObject[] = [
    { name: 'product', content: <ProductTable /> },
    { name: 'categories', content: <CategoryTable /> },
    { name: 'brands', content: <BrandTable /> }
]

const ManageProductPage: React.FC = () => {
    return (
        <AppLayout children={<CustomMenu menuItems={menuItems}/>} routerPath='product' />
    );
};

export default ManageProductPage;