import React from 'react';
import MenuItem from './MenuItem/MenuItem.tsx';
import {MenuItemType} from '../../types';
import './MenuItems.css';

interface MenuItemProps {
    ElementsArray: MenuItemType[];
    AddMenuItem:(itemName:string) => void;
}

const MenuItems:React.FC<MenuItemProps> = ({ElementsArray,AddMenuItem}) => {
    return (
            <div className='menu-items'>
                {ElementsArray.map((element) =>
                    <MenuItem
                        key={element.title}
                        onClickAdd={() => AddMenuItem(element.title)}
                        title={element.title}
                        image={element.image}
                        price={element.price}/>)}
            </div>
    );
};

export default MenuItems;