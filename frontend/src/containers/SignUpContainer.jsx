import React from 'react';
import { connect } from 'react-redux';
import { userSigningUp, userGettingToken, userGettingPosition } from 'actions/users';
import SignUp from 'components/SignUp';


function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        user: state.user.user,
        error: state.user.error,
        token: state.user.token,
        positions: state.user.positions,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        userSigningUp: (data) => dispatch(userSigningUp(data)),
        userGettingToken: () => dispatch(userGettingToken()),
        userGettingPosition: () => dispatch(userGettingPosition()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);