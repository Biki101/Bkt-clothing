import { ShopActionTypes } from './shop.type';

export const fetchCollectionSucess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTION_SUCESS,
    payload: collectionsMap
});

export const fetchCollectionFailed = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTION_FAILED,
    payload: errorMessage
});

export const fetchCollectionStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTION_START
});