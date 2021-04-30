import { takeLatest, call, put, all } from 'redux-saga/effects'; //put for dispatch
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utilities';
import { ShopActionTypes } from './shop.type';
import { fetchCollectionFailed, fetchCollectionSucess } from './shop.action';

export function* fetchCollectionAsync() {
    try {
        const collectionRef = firestore.collection('collection');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot); //call(function, args);
        yield put(fetchCollectionSucess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionFailed(error.message));
    }
}

export function* fetchCollectionStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTION_START, fetchCollectionAsync); 
}

export function* shopSagas() {
    yield all([call(fetchCollectionStart)]);
}