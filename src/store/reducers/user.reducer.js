import {
    USER_LOGIN_SUCCESSFUL,
    USER_LOGIN_FAIL,
    USER_LOGOUT_SUCCESSFUL,
    USER_LOGOUT_FAIL,
    USER_LOAD_SESSION_SUCCESSFUL,
    USER_LOAD_SESSION_FAIL,
} from '../types';

const initialState = {
    profile: {},
    error: null,
    isLogged: false,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case USER_LOGIN_SUCCESSFUL:
            return {
                error: null,
                isLogged: true,
                profile: action.payload,
            };
        case USER_LOGIN_FAIL:
            return {
                ...state,
                isLogged: false,
                error: action.payload,
            };
        case USER_LOGOUT_FAIL:
            return {
                ...state,
                error: action.payload,
                isLogged: false,
            };
        case USER_LOAD_SESSION_SUCCESSFUL:
            return {
                error: null,
                isLogged: true,
                profile: action.payload,
            };
        case USER_LOAD_SESSION_FAIL:
        case USER_LOGOUT_SUCCESSFUL:
            return initialState;
        default:
            return state;
    }
}
