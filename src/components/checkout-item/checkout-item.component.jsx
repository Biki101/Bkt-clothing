import React from 'react';
import { connect } from 'react-redux';
import { removeItem, decreaseItem, addItem } from '../../redux/cart/cart.action';

import './checkout-item.styles.scss';

const CheckOutItems = ({ cartItem, removeItem, decreaseItem, addItem }) => {

    const { imageUrl, name, price, quantity } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">           {/* nested img in div to easily style it without effecting others */}
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => decreaseItem(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => removeItem(cartItem)}>&#10005;</div>   {/* using utf from w3schools for remove icon */}
        </div>
    );
}

const mapDispatchToprops = dispatch => ({
    removeItem: item => dispatch(removeItem(item)),
    decreaseItem: item => dispatch(decreaseItem(item)),
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToprops)(CheckOutItems);