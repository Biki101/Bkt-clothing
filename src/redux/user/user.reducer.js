import UserActionTypes from './user.types';

const ININTIAL_STATE = {
    currentUser: null,
    isSigningIn: false,
    errorMessage: undefined
};

const userReducer = (state = ININTIAL_STATE, action) => {
    switch (action.type) {

        case UserActionTypes.GOOGLE_SIGNIN_START:
        case UserActionTypes.EMAIL_SIGNIN_START:
            return {
                ...state,
                isSigningIn: true
            }
        case UserActionTypes.SIGNIN_SUCESS:
            return {
                ...state,
                isSigningIn: false,
                currentUser: action.payload,
                errorMessage: null //clear error msg
            }
        case UserActionTypes.SIGN_UP_FAILURE:
        case UserActionTypes.SIGNIN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
            return {
                ...state,
                isSigningIn: false,
                errorMessage: action.payload
            }
        case UserActionTypes.SIGN_OUT_SUCESS:
            return {
                ...state,
                currentUser: null,
                errorMessage: null
            }    
        default:
            return state;
    }
}

export default userReducer;