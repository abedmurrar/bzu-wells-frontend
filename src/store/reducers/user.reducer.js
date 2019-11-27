import { USER_LOGIN_SUCCESSFUL, USER_LOGIN_FAIL, USER_LOADING } from '../types';

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
                loading: false,
                error: action.payload,
            };
        case USER_LOADING:
            return {
                ...state,
                error: null,
                loading: true,
            };
        default:
            return state;
    }
}
