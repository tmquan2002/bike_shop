import { useState } from "react";
import OrderPage from './OrderPage';
import OrderItem from './OrderItem';
import { useNumber } from "@app/hooks/use-state-custom";

const ManageOrderPage: React.FC = () => {
    const [currentView, setCurrentView] = useState('order')
    const [currentItemId, setCurrentItemID] = useNumber(1)
    const node = currentView === 'items' ? <OrderItem id={currentItemId} setCurrentView={setCurrentView} setCurrentItemID={setCurrentItemID}/> :
        <OrderPage setCurrentView={setCurrentView} setCurrentItemID={setCurrentItemID} />
    return (
        <>{node}</>
    );
};

export default ManageOrderPage;