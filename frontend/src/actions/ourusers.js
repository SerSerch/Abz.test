import { createAction } from 'redux-actions';

export const ourUsersFirst = createAction('[ourUser] ourUsersFirst');
export const ourUsersNext = createAction('[ourUser] ourUsersNext');

export const ourUsersFirstGetting = () => (dispatch) => {
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6')
        .then((res) => {
            return res.json();
        })
        .then((users) => {
            users.links.next_url = 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=3&count=3';
            dispatch(ourUsersFirst(users));
        })
        .catch((err) => dispatch(ourUsersFirst(err)) );
};

export const ourUsersNextGetting = (nextUrl) => (dispatch) => {
    fetch(nextUrl)
        .then((res) => {
            return res.json();
        })
        .then((users) => {
            dispatch(ourUsersNext(users));
        })
        .catch((err) => dispatch(ourUsersNext(err)) );
};