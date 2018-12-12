import React from 'react';
import { connect } from 'react-redux';
import { userSigningIn, userSigningOut, userSigningAuth } from 'actions/users';
import Navtop from 'components/Navtop';

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
        userSigningOut: (data) => dispatch(userSigningOut(data)),
        userSigningAuth: (data) => dispatch(userSigningAuth(data)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Navtop);