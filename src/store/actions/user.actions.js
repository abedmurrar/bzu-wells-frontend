import api from './api';
import {
    START_LOADING,
    STOP_LOADING,
    USER_LOGIN_FAIL,
    USER_LOGIN_SUCCESSFUL,
    USER_LOGOUT_SUCCESSFUL,
    USER_LOGOUT_FAIL,
    USER_LOAD_SESSION_SUCCESSFUL,
    USER_LOAD_SESSION_FAIL,
} from '../types';

export const login = (username, password) => dispatch => {
    dispatch({
        type: START_LOADING,
        payload: null,
    });

    api.post('/users/login', {
        username,
        password,
    })
        .then(res =>
            dispatch({
                type: USER_LOGIN_SUCCESSFUL,
                payload: res.data,
            })
        )
        .catch(err =>
            dispatch({
                type: USER_LOGIN_FAIL,
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

export const logout = () => dispatch => {
    dispatch({
        type: START_LOADING,
        payload: null,
    });

    api.get('/users/logout')
        .then(res =>
            dispatch({
                type: USER_LOGOUT_SUCCESSFUL,
                payload: null,
            })
        )
        .catch(err =>
            dispatch({
                type: USER_LOGOUT_FAIL,
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

export const getSession = () => dispatch => {
    dispatch({
        type: START_LOADING,
        payload: null,
    });
    api.get('/users/session')
        .then(res =>
            dispatch({ type: USER_LOAD_SESSION_SUCCESSFUL, payload: res.data })
        )
        .catch(err => dispatch({ type: USER_LOAD_SESSION_FAIL, payload: null }))
        .finally(() =>
            dispatch({
                type: STOP_LOADING,
                payload: null,
            })
        );
};
