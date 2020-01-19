import {
    GET_WELLS_SUCCESSFUL,
    GET_WELLS_FAIL,
    USER_LOGOUT_SUCCESSFUL,
} from '../types';

const initialState = {
    list: [],
    error: null,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_WELLS_SUCCESSFUL:
            return {
                ...state,
                error: null,
                list: action.payload,
            };
        case GET_WELLS_FAIL:
            return {
                ...state,
                error: action.payload,
            };
        case USER_LOGOUT_SUCCESSFUL:
            return initialState;
        default:
            return state;
    }
}
