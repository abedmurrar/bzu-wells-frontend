import {
    GET_WELLS_SUCCESSFUL,
    GET_WELLS_FAIL,
    WELLS_LOADING,
    USER_LOGOUT_SUCCESSFUL,
} from '../types';

const initialState = {
    list: [],
    error: null,
    loading: false,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_WELLS_SUCCESSFUL:
            return {
                ...state,
                error: null,
                loading: false,
                list: action.payload,
            };
        case GET_WELLS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case WELLS_LOADING:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case USER_LOGOUT_SUCCESSFUL:
            return initialState;
        default:
            return state;
    }
}
