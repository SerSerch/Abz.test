import { createAction } from 'redux-actions';
import {ourUsersFirst} from "actions/ourusers";

export const userSignedIn = createAction('[User] signedIn');
export const userSignedUp = createAction('[User] signedUp');
export const userSignedOut = createAction('[User] signedOut');
export const userSignedAuth = createAction('[User] signedAuth');

export const userSigningIn = (obj) => (dispatch) => {
    const {data, history} = obj;
    const {email, password, remember_me} = data;
    const request = {
        user: {email, password, remember_me},
    };

    if (data.email && data.password) {
        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
            method: 'post',
            headers: {
                'Token': 'get token',
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            credentials: 'include',
            body: 'foo=bar&lorem=ipsum',
        }).then((res) => {
            return res.json();
        }).then((user) => {
            const storage = data.remember_me ? localStorage : sessionStorage;
            storage.user = JSON.stringify(user);

            dispatch(userSignedIn(user));
            history.push('/');
            history.replace('/');
        }).catch((err) => console.log('error catch', err));
    }
};

export const userSigningUp = (obj) => (dispatch) => {
    const {data, history} = obj;
    const {email, password, remember_me} = data;
    const request = {
        user: {email, password, remember_me},
    };
    //todo добавить проверку формы data
    if (data.email && data.password) {
        fetch('/api/v1/signup', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(request),
        }).then((res) => {
            return res.json();
        }).then((user) => {
            const storage = data.remember_me ? localStorage : sessionStorage;
            storage.user = JSON.stringify(user);

            dispatch(userSignedUp(user));
            history.push('/');
            history.replace('/');
        }).catch((err) => console.log('error catch', err));
    }
};

export const userSigningOut = (data) => (dispatch) => {
    fetch('/api/v1/signout', {
        method: 'delete',
    }).then((res) => {
        return res.json();
    }).then((user) => {
        delete localStorage.user;
        delete sessionStorage.user;
        dispatch(userSignedOut(user));
    }).catch((err) => console.log('error catch', err));
};

export const userSigningAuth = (obj) => (dispatch) => {
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users/1')
        .then((res) => {
            return res.json();
        })
        .then((users) => {
            dispatch(userSignedAuth(users));
        })
        .catch((err) => dispatch(userSignedAuth(err)) );
};