import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleHiddenCart } from '../../redux/cart/cart.action';

import './cart-dropdown.style.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (  // dispatch is passed when dispatchtoprops is not connected as a default
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                    (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)) :
                    (<span className="empty-message"> YOUR CART IS EMPTY </span>)
            }
        </div>
        <CustomButton onClick={
            () => {history.push('/checkout');
                dispatch(toggleHiddenCart());
        }}> GO TO CHECKOUT </CustomButton>
    </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems                          // or cartItems: cartItems 
});

export default withRouter(connect(mapStateToProps)(CartDropdown));