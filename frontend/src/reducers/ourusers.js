import { handleActions } from 'redux-actions';

import { ourUsersFirst, ourUsersNext } from 'actions/ourusers';

const initialState = {
    nextUrl: null,
};

export default handleActions({
    [ourUsersFirst]: (state, action) => {
        let res = {};
        if (action.payload.hasOwnProperty('users')) {
            res = {
                nextUrl: action.payload.links.next_url,
                users: action.payload.users,
            };
        } else {
            res = {
                ...state,
                nextUrl: null,
                error: action.payload.message,
            };
        }
        return res;
    },
    [ourUsersNext]: (state, action) => {
        let res = {};
        if (action.payload.hasOwnProperty('users')) {
            res = {
                nextUrl: action.payload.links.next_url,
                users: state.users.concat(action.payload.users),
            };
        } else {
            res = {
                ...state,
                nextUrl: null,
                error: action.payload.message,
            };
        }
        return res;
    },
}, initialState);