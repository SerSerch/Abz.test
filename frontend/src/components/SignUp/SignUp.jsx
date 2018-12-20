import './SignUp.scss';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";

import {Container, Item} from "components/Content";
import Button from 'components/Button';
import Input from "components/Input";
import {handleInputChange} from "efi/handleChange";

//todo вынести логику в контейнер

class SignUp extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            inputName: '',
            inputEmail: '',
            inputPhone: '',
            inputPosition: '',
            inputFile: {name:''},
            inputNameError: false,
            inputEmailError: false,
            inputPhoneError: false,
            inputPositionError: false,
            inputFileError: false,
            isValid: false
        };
    }

    componentDidMount() {
        const { userGettingToken, userGettingPosition } = this.props;
        userGettingToken();
        userGettingPosition();
    }

    componentDidUpdate() {
        this.isValid();
    }

    showInvalidFileTypeMessage = (file) => {
        this.setState({
            inputFile: {name:''},
            fileContents: '',
            inputFileError: true,
        });
        console.log("Tried to upload invalid filetype", file.type);
    };

    handleFileSelected = (event, file) => {
        if (file.size <= 5242880) {
            this.setState({
                inputFile: file,
                fileContents: event.target.result,
                inputFileError: !this.valid({
                    name: 'inputFile',
                    value: file.name
                }),
            });
        } else {
            this.setState({
                inputFile: {name:''},
                fileContents: '',
                inputFileError: true,
            });
        }
    };

    signUp = () => {
        const {
            token,
            userSigningUp,
            userSigningAuth,
            userId,
            ourUsersFirstGetting,
        } = this.props;
        const {
            inputName,
            inputEmail,
            inputPhone,
            inputPosition,
            inputFile,
            isValid
        } = this.state;

        if (isValid) {
            userSigningUp({
                token,
                inputName,
                inputEmail,
                inputPhone,
                inputPosition,
                inputFile,
                ourUsersFirstGetting
            });
            this.setState({
                inputName: '',
                inputEmail: '',
                inputPhone: '',
                inputPosition: '',
                inputFile: {name: ''},
            });
        }
    };

    onHandleInputChange = (event) => {
        handleInputChange(event, this);
        if (event.target.value.length > 0) {
            this.setState({
                [event.target.name + 'Error']: !this.valid(event.target),
            });
        } else {
            this.setState({
                [event.target.name + 'Error']: false,
            });
        }
    };

    valid = ({name, value}) => {
        let regexp;
        switch (name) {
            case 'inputName':
                regexp = /^[a-zа-яё]{2,}[a-zа-яё ]*$/i;
                break;
            case 'inputEmail':
                regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                break;
            case 'inputPhone':
                regexp = /^[\+]?38 \(0[0-9]{2}\)\s\d{3}\s\d{2}\s\d{2}$/;
                break;
            case 'inputPosition':
                regexp = /^\d+$/;
                break;
            case 'inputFile':
                regexp = /^[\wА-Яа-яёЁ]+\.jpe?g$/i;
                break;
        }

        return (regexp).test(value);
    };

    isValid = () => {
        const {positions} = this.props;
        const {
            inputName,
            inputEmail,
            inputPhone,
            inputPosition,
            inputFile,
            inputNameError,
            inputEmailError,
            inputPhoneError,
            inputPositionError,
            inputFileError,
        } = this.state;
        if (!inputNameError && !inputEmailError && !inputPhoneError && !inputPositionError && !inputFileError &&
            inputName && inputEmail && inputPhone && inputPosition >= 1 && inputPosition <= positions.length && inputFile.name) {
            this.setState({
                isValid: true
            });
        } else {
            this.setState({
                isValid: false
            });
        }
    };

    render() {
        const {positions} = this.props;
        const {inputName,
            inputEmail,
            inputPhone,
            inputPosition,
            inputFile,
            inputNameError,
            inputEmailError,
            inputPhoneError,
            inputPositionError,
            inputFileError,
            isValid,
        } = this.state;
        const fileEvents = {
            showInvalidFileTypeMessage: this.showInvalidFileTypeMessage,
            handleFileSelected: this.handleFileSelected
        };

        return (
            <section className="signup">
                <Container box justify="center">
                    <Item xs={12}>
                        <Typography variant="h2" align="center">
                            Register to get a work
                        </Typography>
                    </Item>
                    <Item xs={12} md={7} lg={12} noSpace className="signup__text">
                        <Typography variant="h5" align="center">
                            Attention! After successful registration and alert, update the list of users in the block from the top
                        </Typography>
                    </Item>
                    <Item noSpace container className="signup__form">
                        <Item xs={12} md={4} noSpace className="signup__item">
                            <Input
                                id="inputName"
                                name="inputName"
                                type="text"
                                variant="outlined"
                                label="Name"
                                placeholder="Your name"
                                margin="normal"
                                value={inputName}
                                onChange={this.onHandleInputChange}
                                fullWidth
                                required
                                error={inputNameError}
                            />
                        </Item>
                        <Item xs={12} md={4} noSpace className="signup__item">
                            <Input
                                id="inputEmail"
                                name="inputEmail"
                                type="text"
                                variant="outlined"
                                label="Email"
                                placeholder="Your email"
                                margin="normal"
                                value={inputEmail}
                                onChange={this.onHandleInputChange}
                                fullWidth
                                required
                                error={inputEmailError}
                            />
                        </Item>
                        <Item xs={12} md={4} noSpace className="signup__item">
                            <Input
                                id="inputPhone"
                                name="inputPhone"
                                type="phone"
                                variant="outlined"
                                label="Phone"
                                placeholder="+38 (___) ___ __ __"
                                margin="normal"
                                value={inputPhone}
                                onChange={this.onHandleInputChange}
                                fullWidth
                                required
                                error={inputPhoneError}
                            />
                        </Item>
                        <Item xs={12} md={6} noSpace className="signup__item">
                            <Input
                                id="inputPosition"
                                select
                                fullWidth
                                label="Select you position"
                                name="inputPosition"
                                value={inputPosition}
                                onChange={this.onHandleInputChange}
                                margin="normal"
                                variant="outlined"
                                currencies={positions}
                                required
                                error={inputPositionError}
                            />
                        </Item>
                        <Item xs={12} md={6} noSpace className="signup__item">
                            <Input
                                id="inputFile"
                                name="inputFile"
                                type="file"
                                variant="outlined"
                                placeholder="Upload your photo"
                                helperText="File format jpg  up to 5 MB, the minimum size of 70x70px"
                                margin="normal"
                                value={inputFile.name}
                                fileEvents={fileEvents}
                                fullWidth
                                readOnly
                                required
                                error={inputFileError}
                            />
                        </Item>
                    </Item>
                    <Item>
                        <Button variant="contained" text="Sign Up" onClick={this.signUp} disabled={!isValid} />
                    </Item>
                </Container>
            </section>
        );
    }
}

export default SignUp;