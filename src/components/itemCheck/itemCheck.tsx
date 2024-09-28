import React from 'react';
import './ItemCheck.css';

interface Props {
    title: string;
    count: number;
    cost: number;
    onDeleteItem: () => void;
}

const ItemCheck:React.FC<Props> = ({title, count, cost, onDeleteItem}) => {
    return (
        <div className='item-check'>
            <span>{title}</span>
            <span> X {count}</span>
            <span> {cost} KGS</span>
            <button onClick={onDeleteItem} type='button' className='delete-btn'></button>
        </div>
    );
};

export default ItemCheck;