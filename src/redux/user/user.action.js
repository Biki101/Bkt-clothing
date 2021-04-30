import UserActionTypes from './user.types';

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGNIN_START
});

export const signInSucess = currentUser => ({
    type: UserActionTypes.SIGNIN_SUCESS,
    payload: currentUser
});

export const signInFailure = errorMessage => ({
    type: UserActionTypes.SIGNIN_FAILURE,
    payload: errorMessage
});

export const emailSignInStart = emailAndPassword => ({
    type: UserActionTypes.EMAIL_SIGNIN_START,
    payload: emailAndPassword
});

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
});

export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
});

export const signOutSucess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCESS
});

export const signOutFailure = error => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error
});

export const signUpStart = userData => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: userData
});
export const signUpSucess = user => ({
    type: UserActionTypes.SIGN_UP_SUCESS,
    payload: user
});
export const signUpFailure = error => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error
});