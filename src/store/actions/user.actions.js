import api from './api';
import {
    USER_LOADING,
    USER_LOGIN_FAIL,
    USER_LOGIN_SUCCESSFUL,
    USER_LOGOUT_SUCCESSFUL,
    USER_LOGOUT_FAIL,
} from '../types';

export const login = (username, password) => dispatch => {
    dispatch({
        type: USER_LOADING,
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
        );
};

export const logout = () => dispatch => {
    dispatch({
        type: USER_LOADING,
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
        );
};
