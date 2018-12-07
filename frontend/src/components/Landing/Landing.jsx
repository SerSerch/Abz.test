import './Landing.scss';

import React, { PureComponent } from 'react';

import FirstDisplay from 'components/FirstDisplay';

class Landing extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {userSigningUp} = this.props;
        return (
            <FirstDisplay SingUp={userSigningUp} />
        );
    }
}

export default Landing;