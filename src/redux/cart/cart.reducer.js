import { CartActionType } from './cart.type';
import {addItemToCart} from './cart.utils';

const ININTIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = ININTIAL_STATE, action) => {
    switch (action.type) {
        case CartActionType.Toggle_Cart_Hidden:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionType.Add_Item:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)   // adding payload to the array
            };    
        default:
            return state;
    };
};

export default cartReducer;