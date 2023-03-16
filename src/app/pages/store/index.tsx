import StaffTable from './StaffTable';
import StoreTable from './StoreTable';
import CustomMenu, { CustomMenuObject } from '../../components/custom-menu';

const menuItems: CustomMenuObject[] = [
    { name: 'stores', content: <StoreTable /> },
    { name: 'staffs', content: <StaffTable /> }
]

const ManageStorePage: React.FC = () => {
    return (
        <CustomMenu menuItems={menuItems}/>
    );
};

export default ManageStorePage;