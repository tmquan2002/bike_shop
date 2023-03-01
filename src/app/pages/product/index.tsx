import { Menu, MenuItemProps } from 'semantic-ui-react';
import { useState } from "react";
import AppLayout from '../../components/app-layout';
import ProductTable from './ProductTable';
import BrandTable from './BrandTable';
import CategoryTable from './CategoryTable';

const ProductMenu: React.FC = () => {
    const [currentItem, setCurrentItem] = useState("products")
    const handleItemClick = (event: React.MouseEvent<HTMLAnchorElement>, data: MenuItemProps) => {
        setCurrentItem(data.name as string)
    }
    return (
        <>
            <Menu pointing secondary>
                <Menu.Item
                    name='products'
                    active={currentItem === 'products'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='categories'
                    active={currentItem === 'categories'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='brands'
                    active={currentItem === 'brands'}
                    onClick={handleItemClick}
                />
            </Menu>
            {currentItem === 'products' && <ProductTable />}
            {currentItem === 'brands' && <BrandTable />}
            {currentItem === 'categories' && <CategoryTable />}
        </>
    )
}

const ManageProductPage: React.FC = () => {
    return (
        <AppLayout children={<ProductMenu />} routerPath='product' />
    );
};

export default ManageProductPage;