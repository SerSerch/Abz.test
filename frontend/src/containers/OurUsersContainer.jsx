import React from 'react';
import { connect } from 'react-redux';
import { ourUsersFirstGetting, ourUsersNextGetting } from 'actions/ourusers';
import OurUsers from 'components/OurUsers';


function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        ourUsers: state.ourUsers,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        ourUsersFirstGetting: (data) => dispatch(ourUsersFirstGetting(data)),
        ourUsersNextGetting: (data) => dispatch(ourUsersNextGetting(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OurUsers);