import React from 'react';
import { connect } from 'react-redux';
import { userSigningUp, userGettingToken, userGettingPosition, userSigningAuth } from 'actions/users';
import SignUp from 'components/SignUp';
import {ourUsersFirstGetting} from "actions/ourusers";


function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        user: state.user.user,
        error: state.user.error,
        token: state.user.token,
        positions: state.user.positions,
        userId: state.user.userId,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        userSigningUp: (data) => dispatch(userSigningUp(data)),
        userGettingToken: () => dispatch(userGettingToken()),
        userGettingPosition: () => dispatch(userGettingPosition()),
        userSigningAuth: () => dispatch(userSigningAuth()),
        ourUsersFirstGetting: () => dispatch(ourUsersFirstGetting()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);