import './Header.scss';

import React, { PureComponent } from 'react';
import Typography from "@material-ui/core/Typography";

import {Container, Item} from 'components/Content';
import Button from 'components/Button';

class Header extends PureComponent {
    render() {
        return (
            <header className="header _middle">
                <Container box>
                    <Item noSpace xs={12} md={7} lg={6} xl={6} container>
                        <Item xs={12}>
                            <Typography variant="h1" color="secondary">
                                Test assignment for Frontend Developer position
                            </Typography>
                        </Item>
                        <Item noSpace xs={12}>
                            <Typography className="header__text" variant="body1" color="secondary">
                                We kindly remind you that your test assignment should
                                be submitted as a link to github/bitbucket repository.
                                <span className="mobile-hidden">
                                    Please be patient, we consider and respond to every application that meets minimum requirements.
                                    We look forward to your submission. Good luck!
                                </span>
                            </Typography>
                        </Item>
                        <Item xs={12}>
                            <Button
                                variant="contained"
                                text="Sign Up"
                                href="#signup"
                                aria-label="Sign Up"
                            />
                        </Item>
                    </Item>
                </Container>
            </header>
        );
    }
}

export default Header;