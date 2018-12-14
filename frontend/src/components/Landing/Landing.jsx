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
                <div id="top" className="hash"></div>
                <FirstDisplay SignUp={userSigningUp} />
                <div id="aboutme" className="hash"></div>
                <AboutMe SignUp={userSigningUp} />
                <div id="relationships" className="hash"></div>
                <Relationships />
                <div id="requirements" className="hash"></div>
                <Requirements />
                <div id="users" className="hash"></div>
                <Users />
                <div id="signup" className="hash"></div>
                <SignUp />
            </Fragment>
        );
    }
}

export default Landing;