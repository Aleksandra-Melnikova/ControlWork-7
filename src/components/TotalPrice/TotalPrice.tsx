import React from 'react';
import './TotalPrice.css';

interface ITotalPriceProps {
    totalPrice:number;
}
const TotalPrice:React.FC<ITotalPriceProps> = ({totalPrice}) => {
    return (
        <div className="total-price">
            <span>Total price:</span>
            <span>{totalPrice} KGS</span>
        </div>
    );
};

export default TotalPrice;