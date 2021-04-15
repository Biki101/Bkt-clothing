import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../components/assets/shopping-bag.svg';
import { toggleHiddenCart } from '../../redux/cart/cart.action';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.style.scss';

const CartIcon = ({ toggleHiddenCart, itemCount }) => (
    <div className="cart-icon" onClick={toggleHiddenCart}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleHiddenCart: () => dispatch(toggleHiddenCart())
});

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);