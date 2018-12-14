import { handleActions } from 'redux-actions';

import { userSignedIn, userSignedUp, userSignedOut, userSignedAuth, userGetToken } from 'actions/users';

const initialState = {
    isLogined: false,
};

export default handleActions({
    [userSignedIn]: (state, action) => {
        let res = {};

        if (!action.payload.hasOwnProperty('error') && action.payload.hasOwnProperty('email')) {
            res = {
                ...state,
                isLogined: true,
                user: action.payload,
                errors: false,
            };
        } else {
            res = {
                ...state,
                error: action.payload.error,
            };
        }
        return res;
    },
    [userSignedUp]: (state, action) => {
        let res = {};

        if (!action.payload.hasOwnProperty('errors') && action.payload.hasOwnProperty('email')) {
            res = {
                ...state,
                isLogined: true,
                user: action.payload,
                errors: false,
            };
        } else {
            res = {
                ...state,
                errors: action.payload.errors,
            };
        }
        return res;
    },
    [userSignedOut]: (state, action) => {

    },
    [userSignedAuth]: (state, action) => {
        let res = {};
        if (action.payload.hasOwnProperty('user')) {
            res = {
                ...state,
                isLogined: true,
                user: action.payload.user,
                error: false,
            };
        } else {
            res = {
                ...state,
                isLogined: false,
                error: action.payload.message,
            };
        }
        return res;
    },
    [userGetToken]: (state, action) => {
        let res = {...state};
        if (action.payload.hasOwnProperty('token')) {
            res = {
                ...state,
                token: action.payload.token,
            };
        } else {
            res = {
                ...state,
                error: action.payload.message,
            };
        }
        return res;
    },
}, initialState);