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
                ourUsers: action.payload.users,
            };
        } else {
            res = {
                ...state,
                nextUrl: null,
                error: action.payload.message,
            };
        }
        console.log("ourUsersFirst", res);
        return res;
    },
    [ourUsersNext]: (state, action) => {
        let res = {};
        if (action.payload.hasOwnProperty('users')) {
            res = {
                nextUrl: action.payload.links.next_url,
                ourUsers: state.ourUsers.concat(action.payload.users),
            };
        } else {
            res = {
                ...state,
                nextUrl: null,
                error: action.payload.message,
            };
        }
        console.log("ourUsersNext",res);
        return res;
    },
}, initialState);