import {
    GET_ONE_WELL_SUCCESSFUL,
    GET_ONE_WELL_READINGS_SUCCESSFUL,
    GET_ONE_WELL_FAIL,
    GET_ONE_WELL_READING_FAIL,
    USER_LOGOUT_SUCCESSFUL,
} from '../types';

const initialState = {
    details: {},
    readings: [],
    error: null,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ONE_WELL_SUCCESSFUL:
            return {
                ...state,
                error: null,
                details: action.payload,
            };
        case GET_ONE_WELL_READINGS_SUCCESSFUL:
            return {
                ...state,
                error: null,
                readings: action.payload,
            };
        case GET_ONE_WELL_FAIL:
        case GET_ONE_WELL_READING_FAIL:
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
