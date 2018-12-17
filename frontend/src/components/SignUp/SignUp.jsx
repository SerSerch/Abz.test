import './SignUp.scss';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";

import {Container, Item} from "components/Content";
import Button from 'components/Button';
import Input from "components/Input";
import {handleInputChange} from "efi/handleChange";

class SignUp extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            inputPosition: '',
            inputName: '',
            inputEmail: '',
            inputPhone: '',
            cancelButtonClicked: false,
            inputFile: {name:''},
        };
    }

    componentDidMount() {
        const { userGettingToken, userGettingPosition } = this.props;
        userGettingToken();
        userGettingPosition();
    }

    onHandleInputChange = (event) => {
        handleInputChange(event, this);
    };

    cancelButtonClicked = () => {
        return this.state.cancelButtonClicked;
    };

    resetCancelButtonClicked = () => {
        this.setState({ cancelButtonClicked: false });
    };

    showInvalidFileTypeMessage = (file) =>{
        console.log("Tried to upload invalid filetype", file.type);
        this.setState({errorFile: true});
    };

    showProgressBar = () => {
        this.setState({ progressBarVisible: true});
    };

    updateProgressBar = (event) => {
        this.setState({
            progressPercent: (event.loaded / event.total) * 100
        });
    };

    handleFileSelected = (event, file) => {
        if (file.size < 5242880) {
            this.setState({
                inputFile: file,
                fileContents: event.target.result,
                errorFile: false,
            });
        }
    };

    signUp = () => {
        const {token, userSigningUp} = this.props;
        const {
            inputName,
            inputEmail,
            inputPhone,
            inputPosition,
            inputFile
        } = this.state;
        //todo добавить проверку формы
        userSigningUp({token, inputName, inputEmail, inputPhone, inputPosition, inputFile});
    };

    render() {
        const {positions} = this.props;
        const fileEvents = {
            cancelButtonClicked: this.cancelButtonClicked,
            resetCancelButtonClicked: this.resetCancelButtonClicked,
            showInvalidFileTypeMessage: this.showInvalidFileTypeMessage,
            showProgressBar: this.showProgressBar,
            updateProgressBar: this.updateProgressBar,
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
                                value={this.state.inputName}
                                onChange={this.onHandleInputChange}
                                fullWidth
                                required
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
                                value={this.state.inputEmail}
                                onChange={this.onHandleInputChange}
                                fullWidth
                                required
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
                                value={this.state.inputPhone}
                                onChange={this.onHandleInputChange}
                                fullWidth
                                required
                            />
                        </Item>
                        <Item xs={12} md={6} noSpace className="signup__item">
                            <Input
                                id="inputPosition"
                                select
                                fullWidth
                                label="Select you position"
                                name="inputPosition"
                                value={this.state.inputPosition}
                                onChange={this.onHandleInputChange}
                                margin="normal"
                                variant="outlined"
                                currencies={positions}
                                required
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
                                value={this.state.inputFile.name}
                                fileEvents={fileEvents}
                                fullWidth
                                readOnly
                                required
                                error={this.state.errorFile}
                            />
                        </Item>
                    </Item>
                    <Item>
                        <Button variant="contained" text="Sign Up" onClick={this.signUp} disabled={false} />
                    </Item>
                </Container>
            </section>
        );
    }
}

export default SignUp;