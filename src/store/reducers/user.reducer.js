import {
    USER_LOGIN_SUCCESSFUL,
    USER_LOGIN_FAIL,
    USER_LOADING,
    USER_LOGOUT_SUCCESSFUL,
    USER_LOGOUT_FAIL,
    USER_LOAD_SESSION_SUCCESSFUL,
    USER_LOAD_SESSION_FAIL,
} from '../types';

const initialState = {
    profile: {},
    error: null,
    isLogged: false,
    loading: false,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case USER_LOGIN_SUCCESSFUL:
            return {
                error: null,
                isLogged: true,
                loading: false,
                profile: action.payload,
            };
        case USER_LOGIN_FAIL:
            return {
                ...state,
                isLogged: false,
                loading: false,
                error: action.payload,
            };
        case USER_LOADING:
            return {
                ...state,
                error: null,
                loading: true,
            };
        case USER_LOGOUT_FAIL:
            return {
                ...state,
                error: action.payload,
                isLogged: false,
                loading: false,
            };
        case USER_LOAD_SESSION_SUCCESSFUL:
            return {
                error: null,
                isLogged: true,
                loading: false,
                profile: action.payload,
            };
        case USER_LOAD_SESSION_FAIL:
        case USER_LOGOUT_SUCCESSFUL:
            return initialState;
        default:
            return state;
    }
}
