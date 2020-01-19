import api from './api';
import {
    GET_WELLS_SUCCESSFUL,
    GET_WELLS_FAIL,
    START_LOADING,
    STOP_LOADING,
} from '../types';

export const getWells = () => dispatch => {
    dispatch({
        type: START_LOADING,
        payload: null,
    });

    return api
        .get('/wells')
        .then(res =>
            dispatch({
                type: GET_WELLS_SUCCESSFUL,
                payload: res.data,
            })
        )
        .catch(err =>
            dispatch({
                type: GET_WELLS_FAIL,
                payload: err,
            })
        )
        .finally(() =>
            dispatch({
                type: STOP_LOADING,
                payload: null,
            })
        );
};
