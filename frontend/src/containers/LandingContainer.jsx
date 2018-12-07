import React from 'react';
import { connect } from 'react-redux';
import {userSigningIn, userSigningUp, userSigningOut, userSigningAuth} from 'actions/users';
import Landing from 'components/Landing';

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        user: state.user,
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        ...props,
        userSigningIn: (data) => dispatch(userSigningIn(data)),
        userSigningUp: (data) => dispatch(userSigningUp(data)),
        userSigningOut: (data) => dispatch(userSigningOut(data)),
        userSigningAuth: (data) => dispatch(userSigningAuth(data)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);