import BrandTable from './BrandTable';
import CategoryTable from './CategoryTable';
import CustomMenu, { CustomMenuObject } from '../../components/custom-menu';
import ProductFeature from './productFetures';

const menuItems: CustomMenuObject[] = [
    { name: 'product', content: <ProductFeature /> },
    { name: 'categories', content: <CategoryTable /> },
    { name: 'brands', content: <BrandTable /> }
]

const ManageProductPage: React.FC = () => {
    return (
        <CustomMenu menuItems={menuItems}/>
    );
};

export default ManageProductPage;