import SHOP_DATA from './shop.data';

const ININTIAL_STATE = {
    collection: SHOP_DATA
};

const shopReducer = (state = ININTIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default shopReducer;