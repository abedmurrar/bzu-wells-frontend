import api from './api';
import { USER_LOADING, USER_LOGIN_FAIL, USER_LOGIN_SUCCESSFUL } from '../types';

export const login = (username, password) => dispatch => {
    dispatch({
        type: USER_LOADING,
        payload: null,
    });

    return api
        .post('/users/login', {
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
