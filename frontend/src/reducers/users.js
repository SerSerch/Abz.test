import { handleActions } from 'redux-actions';

import { userSignedIn, userSignedUp, userSignedOut, userSignedAuth } from 'actions/users';

const initialState = {
    isLogined: false,
};

export default handleActions({
    [userSignedIn]: (state, action) => {
        let res = {};

        if (!action.payload.hasOwnProperty('error') && action.payload.hasOwnProperty('email')) {
            res = {
                isLogined: true,
                user: action.payload,
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
                isLogined: true,
                user: action.payload,
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
        let res = {};

        if (!action.payload.hasOwnProperty('error') && action.payload.hasOwnProperty('out')) {
            res = {
                isLogined: false,
                user: action.payload,
            };
        } else {
            res = {
                ...state,
                error: action.payload.error,
            };
        }
        return res;
    },
    [userSignedAuth]: (state, action) => {
        let res = {};
        if (action.payload.hasOwnProperty('user')) {
            res = {
                isLogined: true,
                user: action.payload.user,
            };
        } else {
            res = {
                ...state,
                isLogined: false,
                error: action.payload.message,
            };
        }
        console.log('user r', res);
        return res;
    },
}, initialState);