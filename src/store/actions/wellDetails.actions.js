import api from './api';
import {
    GET_ONE_WELL_SUCCESSFUL,
    GET_ONE_WELL_READINGS_SUCCESSFUL,
    GET_ONE_WELL_FAIL,
    GET_ONE_WELL_READING_FAIL,
    ONE_WELL_LOADING,
} from '../types';

export const getWellDetailsById = id => dispatch => {
    dispatch({
        type: ONE_WELL_LOADING,
        payload: null,
    });

    return api
        .get(`/wells/${id}`)
        .then(res =>
            dispatch({
                type: GET_ONE_WELL_SUCCESSFUL,
                payload: res.data,
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ONE_WELL_FAIL,
                payload: err,
            })
        );
};

export const getWellReadingsById = (id, from, to) => dispatch => {
    dispatch({
        type: ONE_WELL_LOADING,
        payload: null,
    });
    return api
        .get(`/wells/${id}/readings?from=${from}&to=${to}`)
        .then(res =>
            dispatch({
                type: GET_ONE_WELL_READINGS_SUCCESSFUL,
                payload: res.data,
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ONE_WELL_READING_FAIL,
                payload: err,
            })
        );
};
