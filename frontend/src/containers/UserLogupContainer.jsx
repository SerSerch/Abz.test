import React from 'react';
import { connect } from 'react-redux';
import { userSigningUp, userSigningOut, userSigningAuth } from 'actions/users';
import Logup from 'components/Logup';


function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        user: state.user,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        userSigningUp: (data) => dispatch(userSigningUp(data)),
        userSigningOut: (data) => dispatch(userSigningOut(data)),
        userSigningAuth: (data) => dispatch(userSigningAuth(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logup);