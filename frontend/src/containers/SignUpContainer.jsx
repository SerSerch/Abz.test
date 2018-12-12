import React from 'react';
import { connect } from 'react-redux';
//import { testSigningIn } from 'actions/signups';
import SignUp from 'components/SignUp';


function mapStateToProps(state, ownProps) {
    return {
        //отвечает за то что будет в props компонента из store
        ...ownProps,
        //signup: state.signup,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        //отвечает за то что будет в props компонента из actions
        ...props,
        //testSigningIn: (data) => dispatch(testSigningIn(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);