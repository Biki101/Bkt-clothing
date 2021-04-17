import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']      //we donot need to store user as it is stored in firebase
}

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});


