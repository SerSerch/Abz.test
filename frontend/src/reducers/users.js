import { handleActions } from 'redux-actions';

import {userSignedUp, userSignedAuth, userGetToken, userGetPositions} from 'actions/users';

const initialState = {
    isLogined: false,
    user: null,
    token: null,
    userId: 1,
    positions: null,
};

export default handleActions({
    [userSignedUp]: (state, action) => {
        let res = {};

        if (action.payload.success) {
            res = {
                ...state,
                isLogined: true,
                userId: action.payload.user_id,
                errors: false,
            };
        } else {
            res = {
                ...state,
                errors: action.payload.message,
            };
        }
        return res;
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
    [userGetPositions]: (state, action) => {
        let res = {...state};
        if (action.payload.hasOwnProperty('positions')) {
            res = {
                ...state,
                positions: action.payload.positions,
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