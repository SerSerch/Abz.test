import './Landing.scss';

import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import FirstDisplay from 'components/FirstDisplay';
import AboutMe from 'components/AboutMe';
import Relationships from 'components/Relationships';
import Requirements from 'components/Requirements';
import Users from 'containers/OurUsersContainer';
import SignUp from 'containers/SignUpContainer';

class Landing extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static propTypes = {
        userSigningUp: PropTypes.func,
    };

    render() {
        const {userSigningUp} = this.props;
        return (
            <Fragment>
                <FirstDisplay SignUp={userSigningUp} />
                <div id="aboutme-hash" className="hash"></div>
                <AboutMe SignUp={userSigningUp} />
                <div id="relationships-hash" className="hash"></div>
                <Relationships />
                <div id="requirements-hash" className="hash"></div>
                <Requirements />
                <div id="users-hash" className="hash"></div>
                <Users />
                <div id="signup-hash" className="hash"></div>
                <SignUp />
            </Fragment>
        );
    }
}

export default Landing;