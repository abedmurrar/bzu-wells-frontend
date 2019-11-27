import {
    GET_ONE_WELL_SUCCESSFUL,
    GET_ONE_WELL_READINGS_SUCCESSFUL,
    GET_ONE_WELL_FAIL,
    GET_ONE_WELL_READING_FAIL,
    ONE_WELL_LOADING,
} from '../types';

const initialState = {
    details: {},
    readings: [],
    error: null,
    loading: false,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ONE_WELL_SUCCESSFUL:
            return {
                ...state,
                error: null,
                loading: false,
                details: action.payload,
            };
        case GET_ONE_WELL_READINGS_SUCCESSFUL:
            return {
                ...state,
                error: null,
                loading: false,
                readings: action.payload,
            };
        case GET_ONE_WELL_FAIL:
        case GET_ONE_WELL_READING_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case ONE_WELL_LOADING:
            return {
                ...state,
                error: null,
                loading: true,
            };
        default:
            return state;
    }
}
