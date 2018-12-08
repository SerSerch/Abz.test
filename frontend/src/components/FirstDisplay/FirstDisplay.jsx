import './FirstDisplay.scss';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";

import {Container, Item} from 'components/Content';
import Button from 'components/Button';

class FirstDisplay extends PureComponent {
    static propTypes = {
        SignUp: PropTypes.func,
    };

    render() {
        const {SignUp} = this.props;

        return (
            <div className="first-display _middle">
                <Container box>
                    <Item noSpace xs={12} md={7} lg={6} xl={6} container>
                        <Item>
                            <Typography variant="h1" color="secondary">
                                Test assignment for Frontend Developer position
                            </Typography>
                        </Item>
                        <Item noSpace>
                            <Typography className="first-display__text" variant="body1" color="secondary">
                                We kindly remind you that your test assignment should
                                be submitted as a link to github/bitbucket repository.
                                Please be patient, we consider and respond to every application that meets minimum requirements.
                                We look forward to your submission. Good luck! Lorem ipsum dolor sit amet, consectetur.
                            </Typography>
                        </Item>
                        <Item>
                            <Button variant="contained" text="Sign Up" onClick={SignUp} />
                        </Item>
                    </Item>
                </Container>
            </div>
        );
    }
}

export default FirstDisplay;