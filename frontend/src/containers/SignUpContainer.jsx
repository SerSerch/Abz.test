import React from 'react';
import { connect } from 'react-redux';
import { userSigningUp } from 'actions/users';
import SignUp from 'components/SignUp';


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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);