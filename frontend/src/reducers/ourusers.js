import { handleActions } from 'redux-actions';

import { ourUsersFirst, ourUsersNext } from 'actions/ourusers';

const initialState = {
    nextUrl: null,
    clippingUsers: 0,
    users: null,
};

export default handleActions({
    [ourUsersFirst]: (state, action) => {
        let res = {};
        if (action.payload.hasOwnProperty('users')) {
            const lastUsers = action.payload.users.length % 3;
            res = {
                nextUrl: action.payload.links.next_url,
                clippingUsers: lastUsers == 0 ? -3 : -lastUsers,
                users: action.payload.users,
            };
        } else {
            res = {
                ...state,
                nextUrl: null,
                clippingUsers: 0,
                error: action.payload.message,
            };
        }
        return res;
    },
    [ourUsersNext]: (state, action) => {
        let res = {};
        if (action.payload.hasOwnProperty('users')) {
            const lastUsers = action.payload.users.length % 3;
            res = {
                nextUrl: action.payload.links.next_url,
                clippingUsers: lastUsers == 0 ? -3 : -lastUsers,
                users: state.users.concat(action.payload.users),
            };
        } else {
            res = {
                ...state,
                nextUrl: null,
                clippingUsers: 0,
                error: action.payload.message,
            };
        }
        return res;
    },
}, initialState);