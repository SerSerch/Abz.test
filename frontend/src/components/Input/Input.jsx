import './Input.scss';

import React, { PureComponent, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import MaskedInput from 'react-text-mask';
import FileInput from "react-simple-file-input";
import PropTypes from 'prop-types';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import InputM from '@material-ui/core/Input';
import OutlinedInputM from '@material-ui/core/OutlinedInput';
import InputLabelM from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import SelectM from '@material-ui/core/Select';
import MenuItemM from "@material-ui/core/MenuItem";

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from "components/Button";
import CaretDown from "svg/CaretDown";
import Upload from "svg/Upload";

const allowedFileTypes = ["image/jpg", "image/jpeg"];

const stylesMenuItem = theme => ({
    selected: {
        backgroundColor: 'inherit !important',
        color: '#fc831f',
    }
});

const stylesInputLabel = theme => ({
    root: {
        padding: '0 5px',
        transform: 'translate(13px, 20px)',
    },
    shrink: {
        color: '#8d8c8c',
    }
});

const stylesOutlinedInput = theme => ({
    input: {
        padding: '18.5px 18px',
    }
});

const stylesSelect = theme => ({
    select: {
        '&:focus': {
            backgroundColor: 'transparent',
            color: '#000',
        }
    },
    icon: {
        fill: '#000',
        width: '16px',
        height: '10px',
        top: '50%',
        transform: 'translate(-13px, -50%)',
    }
});

const MenuItem = withStyles(stylesMenuItem)(MenuItemM);
const Select = withStyles(stylesSelect)(SelectM);
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

const InputVariant = (props, labelWidth) => {
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
        readOnly,
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
                labelWidth={labelWidth}
                {...(type == 'phone' ? {'inputComponent': TextMaskCustom} : {})}
                readOnly={readOnly}
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
                readOnly={readOnly}
            />

    );
};

const TextMaskCustom = (props) => {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={inputRef}
            mask={['+', '3', '8', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/]}
            placeholderChar={'\u2000'}
        />
    );
}

const fileIsIncorrectFiletype = (file) => {
    if (allowedFileTypes.indexOf(file.type) === -1) {
        return true;
    } else {
        return false;
    }
};

TextMaskCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
};

class Input extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            labelWidth: 0,
        };
    }

    componentDidMount() {
        const {label} = this.props;
        this.setState({
            labelWidth: label ? ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth : 0,
        });
    }

    getInputRef = (node) => { this.InputLabelRef = node };

    render() {
        const {
            value,
            onChange,
            id,
            label,
            helperText,
            type,
            variant,
            margin,
            select,
            error,
            disabled,
            required,
            fullWidth,
            currencies,
            fileEvents,
        } = this.props;

        return (
            <Fragment>
                {type == 'file' ?
                    <FileInput
                        id={'_' + id}
                        readAs='binary'
                        style={ { display: 'none' } }

                        onLoadStart={fileEvents.showProgressBar}
                        onLoad={fileEvents.handleFileSelected}
                        onProgress={fileEvents.updateProgressBar}

                        cancelIf={fileIsIncorrectFiletype}
                        abortIf={fileEvents.cancelButtonClicked}

                        onCancel={fileEvents.showInvalidFileTypeMessage}
                        onAbort={fileEvents.resetCancelButtonClicked}
                    />
                    : ''
                }
                <FormControl
                    fullWidth={fullWidth}
                    margin={margin}
                    variant={variant}
                    error={error}
                    disabled={disabled}
                    required={required}
                >
                    {label ?
                        <InputLabel
                            htmlFor={id}
                            ref={this.getInputRef}
                        >
                            {label}
                        </InputLabel>
                        : ''
                    }
                    {type == 'file' ?
                        <Button
                            component="label"
                            text="Upload"
                            htmlFor={'_' + id}
                            variant="outlined"
                            className="_file"
                            name="openfile"
                        />
                        : ''
                    }
                    {type == 'file' ?
                        <Button
                            component="label"
                            htmlFor={'_' + id}
                            variant="outlined"
                            className="_file _icon"
                            name="openfileicon"
                        >
                            <Upload />Upload
                        </Button>
                        : ''
                    }
                    {select ?
                        <Select
                            value={value}
                            onChange={onChange}
                            IconComponent={CaretDown}
                            input={
                                InputVariant(this.props, this.state.labelWidth)
                            }
                        >
                            {currencies ? currencies.map(option => (
                                    <MenuItem key={option.id} value={option.id}>
                                        {option.name}
                                    </MenuItem>
                                ))
                                : ''
                            }
                        </Select>
                        :
                        InputVariant(this.props, this.state.labelWidth)
                    }
                    {helperText ? <FormHelperText>{helperText}</FormHelperText> : ''}
                </FormControl>
            </Fragment>
        );
    }
}

export default Input;