import { GET_WELLS_SUCCESSFUL, GET_WELLS_FAIL, WELLS_LOADING } from '../types';

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
                loading: true,
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
        default:
            return state;
    }
}
