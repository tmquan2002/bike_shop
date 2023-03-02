import AppLayout from '../../components/app-layout';
import StaffTable from './StaffTable';
import StoreTable from './StoreTable';
import CustomMenu, { CustomMenuObject } from '../../components/custom-menu';

const menuItems: CustomMenuObject[] = [
    { name: 'staffs', content: <StaffTable /> },
    { name: 'stores', content: <StoreTable /> }
]

const ManageStorePage: React.FC = () => {
    return (
        <AppLayout children={<CustomMenu menuItems={menuItems}/>} routerPath='store' />
    );
};

export default ManageStorePage;