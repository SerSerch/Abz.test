import { createAction } from 'redux-actions';

export const userSignedIn = createAction('[User] signedIn');
export const userSignedUp = createAction('[User] signedUp');
export const userSignedOut = createAction('[User] signedOut');
export const userSignedAuth = createAction('[User] signedAuth');
export const userGetToken = createAction('[User] getToken');

export const userSigningIn = (obj) => (dispatch) => {
    consile.log('userSigningIn');
};

export const userSigningUp = (obj) => (dispatch) => {
    const {token, inputName, inputEmail, inputPhone, inputPosition, inputFile} = obj;
    const formData = new FormData();

    formData.append('name', inputName);
    formData.append('email', inputEmail);
    formData.append('phone',  inputPhone);
    formData.append('position_id', inputPosition);
    formData.append('photo', inputFile);
        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
            method: 'post',
            headers: {
                'Token': token,
                'Content-Type': 'multipart/form-data'
            },
            body: formData,
        }).then((res) => {
            return res.json();
        }).then((user) => {
            const storage = data.remember_me ? localStorage : sessionStorage;
            storage.user = JSON.stringify(user);

            dispatch(userSignedUp(user));
        }).catch((err) => dispatch(userSignedUp(err)) );
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

export const userSigningAuth = (id) => (dispatch) => {
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users/' + id)
        .then((res) => {
            return res.json();
        })
        .then((users) => {
            dispatch(userSignedAuth(users));
        })
        .catch((err) => dispatch(userSignedAuth(err)) );
};

export const userGettingToken = () => (dispatch) => {
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
        .then((res) => {
            return res.json();
        })
        .then((token) => {
            dispatch(userGetToken(token));
        })
        .catch((err) => dispatch(userGetToken(err)) );
};