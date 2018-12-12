import './SignUp.scss';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";

import {Container, Item} from "components/Content";
import Button from 'components/Button';

class SignUp extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
  
    render() {
        return (
            <Container className="signup" box>
                <Item xs={12}>
                    <Typography variant="h2" align="center">
                        Register to get a work
                    </Typography>
                </Item>
                <Item xs={12} noSpace>
                    <Typography variant="h5" align="center">
                        Attention! After successful registration and alert, update the list of users in the block from the top
                    </Typography>
                </Item>
            </Container>
        );
    }
}

export default SignUp;