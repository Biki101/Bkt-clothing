import { createSelector } from 'reselect';

const selectUser = state => state.user;   // input selector
export const selectCurrentUser = createSelector(   // memoi selector it uses input selector and createStore
    [selectUser],                         // array or group of objects of input selectors 
    user => user.currentUser
);