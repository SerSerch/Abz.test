import './Landing.scss';

import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import FirstDisplay from 'components/FirstDisplay';
import AboutMe from 'components/AboutMe';
import Relationships from 'components/Relationships';
import Requirements from 'components/Requirements';

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
                <AboutMe SignUp={userSigningUp} />
                <Relationships />
                <Requirements />
            </Fragment>
        );
    }
}

export default Landing;