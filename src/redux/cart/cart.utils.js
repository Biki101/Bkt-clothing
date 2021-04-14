// Utility function allows us to keep our files clean and organize fuctions that we may need in multiple files in one location
export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
       cartItem => cartItem.id === cartItemToAdd.id
    );   //find returns first item found in array based on condition passed
    if(existingCartItem) {
        return (cartItems.map(cartItem => 
            cartItem.id == cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem));
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]; //quantity prop is attached if it does not exist
};