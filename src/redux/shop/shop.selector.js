import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollection = createSelector(
    [selectShop],
    shop => shop.collection
);

export const selectCollection = collectionUrlParam => createSelector(
    [selectShopCollection],
    (collection => collection ? collection[collectionUrlParam] : collection)
);

export const selectCollectionforPreview = createSelector(
    [selectShopCollection],
    collections => collections ?  Object.keys(collections).map(key => collections[key]) : [] // Object.keys(obj) gives keys of obj in array
);
