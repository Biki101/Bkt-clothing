import React from 'react';
//import {  }

import './checkout-item.styles.scss';

const CheckOutItems = ({ cartItems: { imageUrl, name, price, quantity }, total }) => (
    <div className="checkout-item">
        <div className="image-container">           {/* nested img in div to easily style it without effecting others */}
           <img src={imageUrl} alt="item" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">{quantity}</span>
        <span className="price">{price}</span>
        <div className="remove-button">&#10005;</div>   {/* using utf from w3schools for remove icon */}
    </div>
);

export default CheckOutItems;