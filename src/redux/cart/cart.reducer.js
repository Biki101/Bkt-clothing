import { CartActionType } from './cart.type';

const ININTIAL_STATE = {
    hidden: true
};

const cartReducer = (state = ININTIAL_STATE, action) => {
    switch (action.type) {
        case CartActionType.Toggle_Cart_Hidden:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
};

export default cartReducer;