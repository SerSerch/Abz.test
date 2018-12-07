import './Content.scss';

import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';

export class Container extends PureComponent {
    render() {
        const { box, className, ...other } = this.props;
        return (
            <Grid container {...(box ? {className: className + ' content-box'} : {})} {...other}/>
        );
    }
}

export class Item extends PureComponent {
    render() {
        const { noSpace, className, ...other } = this.props;
        return (
            <Grid item {...(noSpace ? {} : {className: className + ' content-item'})} {...other} />
        );
    }
}