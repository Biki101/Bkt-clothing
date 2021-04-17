import { CartActionType } from './cart.type';

export const toggleHiddenCart = () => ({              //we donot need pay load
     type: CartActionType.Toggle_Cart_Hidden
});

export const addItem = item => ({
     type: CartActionType.Add_Item,
     payload: item
});

export const removeItem = item => ({
     type: CartActionType.Remove_Item,
     payload: item
});

export const decreaseItem = item => ({
     type: CartActionType.Decrease_Item,
     payload: item
})