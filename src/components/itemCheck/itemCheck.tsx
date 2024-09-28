import React from 'react';
import './ItemCheck.css';

interface Props {
    title: string;
    count: number;
    cost: number;
}

const ItemCheck:React.FC<Props> = ({title, count, cost}) => {
    return (
        <div className='item-check'>
            <span className='item-check-title'>{title}</span>
            <span className='item-check-count'> X {count}</span>
            <span className='item-check-cost'> {cost} KGS</span>
            <button type='button' className='delete-btn'></button>
        </div>
    );
};

export default ItemCheck;