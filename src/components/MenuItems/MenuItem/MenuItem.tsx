import React from 'react';
import './MenuItem.css';

interface MenuItemProps {
    image:string;
    title:string;
    price:number;
    onClickAdd:()=>void;
}

const MenuItem:React.FC<MenuItemProps> = ({image, title, price, onClickAdd}) => {
    return (
        <button onClick={onClickAdd} type='button' className='menu-item'>
            <img className='menu-image' src={image} alt={title}/>
            <div className='item-text'>
                <h3 className='menu-title'>{title}</h3>
                <p className='menu-price'>Price: {price} KGS</p>
            </div>
        </button>
    );
};

export default MenuItem;