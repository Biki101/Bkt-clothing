import { CartActionType } from './cart.type';
import { addItemToCart, decreaseItemFromCart } from './cart.utils';

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
        case CartActionType.Remove_Item:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
            };
        case CartActionType.Decrease_Item:
            return {
                ...state,
                cartItems: decreaseItemFromCart(state.cartItems, action.payload)
            }
        default:
            return state;
    };
};

export default cartReducer;