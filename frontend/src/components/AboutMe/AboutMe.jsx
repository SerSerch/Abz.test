import './AboutMe.scss';

import React, { PureComponent } from 'react';
import Typography from "@material-ui/core/Typography";

import {Container, Item} from "components/Content";
import Button from 'components/Button';

import ManMobile from 'svg/man-mobile.svg';

class AboutMe extends PureComponent {
    render() {
        return (
            <Container component="section" className="aboutme" box>
                <Item xs={12} className="aboutme__caption">
                    <Typography variant="h2" align="center">
                        Let's get acquainted
                    </Typography>
                </Item>
                <Item xs={12} md={4}>
                    <img className="aboutme__man" src={ManMobile} alt="Me"/>
                </Item>
                <Item noSpace xs={12} md={8} container>
                    <Item>
                        <Typography variant="h3">
                            I am cool frontend developer
                        </Typography>
                        <Typography className="aboutme__text">
                            When real users have a slow experience on mobile, they're much less likely to find what they are looking for or purchase from you in the future. For many sites this equates to a huge missed opportunity, especially when more than half of visits are abandoned if a mobile page takes over 3 seconds to load.
                        </Typography>
                        <Typography className="aboutme__text">
                            Last week, Google Search and Ads teams announced two new speed initiatives to help improve user-experience on the web.
                        </Typography>
                        <Button
                            className="_aboutme"
                            variant="text"
                            text="Sign Up"
                            href="#signup"
                            aria-label="Sign Up"
                        />
                    </Item>
                </Item>
            </Container>
        );
    }
}

export default AboutMe;