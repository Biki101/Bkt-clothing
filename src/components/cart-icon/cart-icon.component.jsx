import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../components/assets/shopping-bag.svg';
import { toggleHiddenCart } from '../../redux/cart/cart.action';
import {connect} from 'react-redux';

import './cart-icon.style.scss';

const CartIcon = ({toggleHiddenCart}) => (
    <div className="cart-icon" onClick={toggleHiddenCart}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleHiddenCart: () => dispatch(toggleHiddenCart())
})

export default connect(null, mapDispatchToProps)(CartIcon);