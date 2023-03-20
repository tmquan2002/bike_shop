import StaffTable from './StaffTable';
import CustomMenu, { CustomMenuObject } from '@components/custom-menu';
import StoreFeature from './storeFeatures';

const menuItems: CustomMenuObject[] = [
    { name: 'stores', content: <StoreFeature /> },
    { name: 'staffs', content: <StaffTable /> }
]

const ManageStorePage: React.FC = () => {
    return (
        <CustomMenu menuItems={menuItems}/>
    );
};

export default ManageStorePage;