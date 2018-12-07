import './Button.scss';

import React, { PureComponent } from 'react';
import ButtonM from "@material-ui/core/Button";

class Button extends PureComponent {
    render() {
        const { variant, onClick, text, ...other } = this.props;
        return (
            <ButtonM
                className={'button _' + variant}
                variant={variant}
                color="primary"
                onClick={onClick}
                {...other}
            >
                {text ? text : 'Button'}
            </ButtonM>
        );
    }
}

export default Button;