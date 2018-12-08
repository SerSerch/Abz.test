import React, { PureComponent, Fragment } from 'react';

class Redirect extends PureComponent {
    componentDidMount() {
        const { history } = this.props;
        history.push('/');
        history.replace('/');
    }
    render() {
        return (
            <Fragment>Redirect</Fragment>
        );
    }
}

export default Redirect;