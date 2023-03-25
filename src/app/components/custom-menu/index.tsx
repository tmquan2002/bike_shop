import { useString } from "@app/hooks/use-state-custom";
import { Menu, MenuItemProps } from "semantic-ui-react";

export interface CustomMenuObject {
    name: string;
    content: React.ReactNode;
}

interface MenuProps {
    /**
     * An array of menu item objects, should include 2 params:
     * @param {string} name A name for each menu item
     * @param {React.ReactNode} content A react content inside each menu item
     */
    menuItems: CustomMenuObject[]
}

const CustomMenu = ({ menuItems }: MenuProps): JSX.Element => {
    const [currentItem, setCurrentItem] = useString(menuItems[0].name)
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