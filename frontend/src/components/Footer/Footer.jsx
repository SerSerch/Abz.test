import './Footer.scss';

import React, { PureComponent, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

class Footer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { match, location, history } = this.props;

        return (
            <Fragment>
                {location.pathname == '/' ? <div className="footer">&copy;&nbsp;SerSerch</div> : ''}
            </Fragment>
        );
    }
}

export default withRouter(Footer);