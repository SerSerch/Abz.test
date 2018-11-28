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

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { handleInputChange } from 'efi/handleChange';

const stylesInputLabel = theme => ({
    root: {
        backgroundColor: '#fff',
        padding: '0 5px',
    },
    shrink: {
        color: '#8d8c8c',
    }
});

const stylesOutlinedInput = theme => ({
    notchedOutline: {
        border: '1px solid #b7b7b7 !important',
    }
});

const InputLabel = withStyles(stylesInputLabel)(InputLabelM);
const OutlinedInput = withStyles(stylesOutlinedInput)(OutlinedInputM);

const endAdornment = (state, disabled, onClick) => {
    return <InputAdornment position="end">
        <IconButton
            aria-label="Toggle password visibility"
            onClick={onClick}
            disabled={disabled}
        >
            {state.showPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
    </InputAdornment>;
};

class Input extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            showPassword: false,
        };
    }

    onHandleInputChange = (event) => {
        handleInputChange(event, this);
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    render() {
        const {
            id,
            type,
            label,
            helperText,
            variant,
            margin,
            error,
            disabled,
            required,
            fullWidth,
            ...other
        } = this.props;
        return (
            <FormControl
                fullWidth={fullWidth}
                margin={margin}
                variant={variant}
                error={error}
                disabled={disabled}
                required={required}
            >
                <InputLabel htmlFor={id}>{label}</InputLabel>
                { variant == 'outlined' ?
                    <OutlinedInput
                        id={id}
                        name={id}
                        type={type == 'password' && !this.state.showPassword ? 'password' : 'text'}
                        {...other}
                        onChange={this.onHandleInputChange}
                        endAdornment={type == 'password' ? endAdornment(this.state, disabled, this.handleClickShowPassword) : ''}
                        labelWidth={0}
                    />
                    :
                    <InputM
                        id={id}
                        name={id}
                        type={type == 'password' && !this.state.showPassword ? 'password' : 'text'}
                        {...other}
                        onChange={this.onHandleInputChange}
                        endAdornment={type == 'password' ? endAdornment(this.state, disabled, this.handleClickShowPassword) : ''}
                    />
                }
                {helperText ? <FormHelperText>{helperText}</FormHelperText> : ''}
            </FormControl>
        );
    }
}

export default Input;