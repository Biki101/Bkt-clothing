import { ShopActionTypes } from './shop.type';

const ININTIAL_STATE = {
    collection: null,
    isFetching: false,
    errorMessage: undefined
};

const shopReducer = (state = ININTIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.FETCH_COLLECTION_START:
            return {
                ...state,
                isFetching: true
            };
        case ShopActionTypes.FETCH_COLLECTION_SUCESS:
            return {
                ...state,
                collection: action.payload,
                isFetching: false
            };
        case ShopActionTypes.FETCH_COLLECTION_FAILED:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        default:
            return state;
    }
}

export default shopReducer;