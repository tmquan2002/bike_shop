import { useState } from "react";
import { Menu, MenuItemProps } from "semantic-ui-react";

export interface CustomMenuObject {
    name: string;
    content: React.ReactNode;
}

interface MenuProps {
    menuItems: CustomMenuObject[]
}

const CustomMenu = ({ menuItems }: MenuProps): JSX.Element => {
    const [currentItem, setCurrentItem] = useState(menuItems[0].name)
    const handleItemClick = (event: React.MouseEvent<HTMLAnchorElement>, data: MenuItemProps) => {
        setCurrentItem(data.name as string)
    }
    return (
        <>
            <Menu pointing secondary>
                {menuItems.map((item, index) => (
                    <Menu.Item key={index}
                        name={item.name}
                        active={currentItem === item.name}
                        onClick={handleItemClick}
                    />
                ))}
            </Menu>
            {menuItems.map((item, index) => (
                <div key={index}>{ currentItem === item.name && item.content}</div>
            ))}
        </>
    )
}

export default CustomMenu