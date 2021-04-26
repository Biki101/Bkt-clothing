import { ShopActionTypes } from './shop.type';

const ININTIAL_STATE = {
    collection: null
};

const shopReducer = (state = ININTIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.ADD_SHOP_ITEMS:
            return {
                ...state,
                collection: action.payload
            };
        default:
            return state;
    }
}

export default shopReducer;