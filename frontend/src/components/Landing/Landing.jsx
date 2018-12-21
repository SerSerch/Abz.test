import './Landing.scss';

import React, { PureComponent, Fragment } from 'react';
import Header from 'components/Header';
import AboutMe from 'components/AboutMe';
import Relationships from 'components/Relationships';
import Requirements from 'components/Requirements';
import Users from 'containers/OurUsersContainer';
import SignUp from 'containers/SignUpContainer';

class Landing extends PureComponent {
    render() {
        return (
            <Fragment>
                <div id="top" className="hash"></div>
                <Header />
                <div id="aboutme" className="hash"></div>
                <AboutMe />
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