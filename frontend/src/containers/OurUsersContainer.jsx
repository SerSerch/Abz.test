import React from 'react';
import { connect } from 'react-redux';
import { ourUsersFirstGetting, ourUsersNextGetting } from 'actions/ourusers';
import OurUsers from 'components/OurUsers';


function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        users: state.ourUsers.users,
        nextUrl: state.ourUsers.nextUrl,
        clippingUsers: state.ourUsers.clippingUsers,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        ourUsersFirstGetting: () => dispatch(ourUsersFirstGetting()),
        ourUsersNextGetting: (data) => dispatch(ourUsersNextGetting(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OurUsers);