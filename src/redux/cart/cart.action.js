import {CartActionType} from './cart.type';

export const toggleHiddenCart = () => ({              //we donot need pay load
     type: CartActionType.Toggle_Cart_Hidden
});

export const addItem = item => ({
     type: CartActionType.Add_Item,
     payload: item
});