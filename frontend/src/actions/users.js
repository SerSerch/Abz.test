import { createAction } from 'redux-actions';

export const userSignedUp = createAction('[User] signedUp');
export const userSignedAuth = createAction('[User] signedAuth');
export const userGetToken = createAction('[User] getToken');
export const userGetPositions = createAction('[User] getPositions');

export const userSigningUp = (obj) => (dispatch) => {
    const {
        token,
        inputName,
        inputEmail,
        inputPhone,
        inputPosition,
        inputFile,
    } = obj;
    let formData = new FormData();

    formData.append('name', inputName);
    formData.append('email', inputEmail);
    formData.append('phone',  ('+' + inputPhone.replace(/[^\d]+/g, '')));
    formData.append('position_id', inputPosition);
    formData.append('photo', inputFile);
        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
            method: 'post',
            headers: {
                'Token': token
            },
            body: formData,
        }).then((res) => {
            return res.json();
        }).then((user) => {
            console.log(user);
            dispatch(userSignedUp(user['user_id']));
        }).catch((err) => {dispatch(userSignedUp(err)); console.log(err) });
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

export const userGettingPosition = () => (dispatch) => {
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
        .then((res) => {
            return res.json();
        })
        .then((positions) => {
            dispatch(userGetPositions(positions));
        })
        .catch((err) => dispatch(userGetPositions(err)) );
};