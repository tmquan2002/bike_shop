import { Route } from "react-router-dom";

const AppRoutes: React.FC = () => {
    return (
        <Route path="*" element={<div></div>} />
    );
}

export default AppRoutes;