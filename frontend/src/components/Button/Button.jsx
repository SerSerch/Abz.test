import './Button.scss';

import React, { PureComponent } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ButtonM from "@material-ui/core/Button";

class Button extends PureComponent {
    static propTypes = {
        variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
        color: PropTypes.oneOf(['primary', 'secondary']),
        text: PropTypes.string,
        className: PropTypes.string,
        onClick: PropTypes.func,
    };

    static defaultProps = {
        variant: 'contained',
        text: 'Button',
        color: 'primary',
    };

    render() {
        const {
            variant,
            text,
            color,
            className,
            onClick,
            children,
            ...other
        } = this.props;

        const buttonClasses = classNames(
            'button',
            {
                '_contained': variant === 'contained',
                '_outlined': variant === 'outlined',
                '_text': variant === 'text',
            },
            className
        );

        return (
            <ButtonM
                className={buttonClasses}
                variant={variant}
                color={color}
                onClick={onClick}
                {...other}
            >
                {children || text}
            </ButtonM>
        );
    }
}

export default Button;