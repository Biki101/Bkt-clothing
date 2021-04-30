import { all, put, takeLatest, call } from 'redux-saga/effects';
import UserActionTypes from '../user/user.types';
import { emptyCart } from './cart.action';

export function* emptyingCartOnSignOut() {
    yield put(emptyCart());
}

export function* onEmptyCart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCESS, emptyingCartOnSignOut);
}

export function* cartSagas() {
    yield all([call(onEmptyCart)]);
}