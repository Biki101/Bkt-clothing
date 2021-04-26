import { ShopActionTypes } from './shop.type';

export const addShopItems = collectionsMap => ({
    type: ShopActionTypes.ADD_SHOP_ITEMS,
    payload: collectionsMap
});