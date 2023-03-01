import { Menu, MenuItemProps } from 'semantic-ui-react';
import { useState } from "react";
import AppLayout from '../../components/app-layout';
import StaffTable from './StaffTable';
import StoreTable from './StoreTable';

const ProductMenu: React.FC = () => {
    const [currentItem, setCurrentItem] = useState("staffs")
    const handleItemClick = (event: React.MouseEvent<HTMLAnchorElement>, data: MenuItemProps) => {
        setCurrentItem(data.name as string)
    }
    return (
        <>
            <Menu pointing secondary>
                <Menu.Item
                    name='staffs'
                    active={currentItem === 'staffs'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='stores'
                    active={currentItem === 'stores'}
                    onClick={handleItemClick}
                />
            </Menu>
            {currentItem === 'staffs' && <StaffTable />}
            {currentItem === 'stores' && <StoreTable />}
        </>
    )
}

const ManageStorePage: React.FC = () => {
    return (
        <AppLayout children={<ProductMenu />} routerPath='store' />
    );
};

export default ManageStorePage;