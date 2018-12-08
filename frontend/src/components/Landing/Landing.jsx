import './Landing.scss';

import React, { PureComponent, Fragment } from 'react';

import FirstDisplay from 'components/FirstDisplay';
import AboutMe from 'components/AboutMe';

class Landing extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {userSigningUp} = this.props;
        return (
            <Fragment>
                <FirstDisplay SingUp={userSigningUp} />
                <AboutMe SingUp={userSigningUp} />
            </Fragment>
        );
    }
}

export default Landing;