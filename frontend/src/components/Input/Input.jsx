import './Input.scss';

import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import InputM from '@material-ui/core/Input';
import OutlinedInputM from '@material-ui/core/OutlinedInput';
import InputLabelM from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const stylesInputLabel = theme => ({
    root: {
        backgroundColor: '#fff',
        padding: '0 5px',
        transform: 'translate(13px, 19px)',
    },
    shrink: {
        color: '#8d8c8c',
    }
});

const stylesOutlinedInput = theme => ({
    input: {
        padding: '17.5px 18px',
    }
});

const InputLabel = withStyles(stylesInputLabel)(InputLabelM);
const OutlinedInput = withStyles(stylesOutlinedInput)(OutlinedInputM);

const endAdornment = (showPassword, disabled, onClick) => {
    return (
        <InputAdornment position="end">
            <IconButton
                aria-label="Toggle password visibility"
                onClick={onClick}
                disabled={disabled}
            >
                {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
        </InputAdornment>
    );
};

const InputVariant = (props) => {
    const {
        value,
        onChange,
        onShowPass,
        id,
        name,
        type,
        placeholder,
        inputProps,
        variant,
        select,
        disabled,
        show,
    } = props;

    return (
        variant == 'outlined' ?
            <OutlinedInput
                id={id}
                name={name}
                type={type == 'password' && !show ? 'password' : 'text'}
                placeholder={placeholder}
                value={!select ? value : ''}
                inputProps={inputProps}
                onChange={!select ? onChange : ''}
                endAdornment={type == 'password' ? endAdornment(show, disabled, onShowPass) : ''}
                labelWidth={0}
            />
            :
            <InputM
                id={id}
                name={name}
                type={type == 'password' && !show ? 'password' : 'text'}
                placeholder={placeholder}
                value={!select ? value : ''}
                inputProps={inputProps}
                onChange={!select ? onChange : ''}
                endAdornment={type == 'password' ? endAdornment(show, disabled, onShowPass) : ''}
            />

    );
};

class Input extends PureComponent {
    render() {
        const {
            value,
            onChange,
            id,
            label,
            helperText,
            variant,
            margin,
            select,
            error,
            disabled,
            required,
            fullWidth,
            children,
        } = this.props;

        return (
            <FormControl
                fullWidth={fullWidth}
                margin={margin}
                variant={variant}
                error={error}
                disabled={disabled}
                required={required}
                {...(select ? {'select': 'true'} : {})}
            >
                <InputLabel htmlFor={id}>{label}</InputLabel>
                {select ?
                    <Select
                        value={value}
                        onChange={onChange}
                        input={
                            InputVariant(this.props)
                        }
                    >
                        {children}
                    </Select>
                    :
                    InputVariant(this.props)
                }
                {helperText ? <FormHelperText>{helperText}</FormHelperText> : ''}
            </FormControl>
        );
    }
}

export default Input;