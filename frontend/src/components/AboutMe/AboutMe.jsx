import './AboutMe.scss';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";

import {Container, Item} from "components/Content";
import Button from 'components/Button';

import ManMobile from 'svg/man-mobile.svg';

class AboutMe extends PureComponent {
    static propTypes = {
        SignUp: PropTypes.func,
    };

    render() {
        const {SignUp} = this.props;

        return (
            <Container className="aboutme" box>
                <Item xs={12}>
                    <Typography variant="h2" align="center">
                        Let's get ac quainted
                    </Typography>
                </Item>
                <Item xs={12} md={4}>
                    <img src={ManMobile} alt="Me"/>
                </Item>
                <Item noSpace xs={12} md={8} container>
                    <Item>
                        <Typography variant="h3">
                            I am cool frontend developer
                        </Typography>
                        <Typography>
                            When real users have a slow experience on mobile, they're much less likely to find what they are looking for or purchase from you in the future. For many sites this equates to a huge missed opportunity, especially when more than half of visits are abandoned if a mobile page takes over 3 seconds to load.
                        </Typography>
                        <Typography>
                            Last week, Google Search and Ads teams announced two new speed initiatives to help improve user-experience on the web.
                        </Typography>
                    </Item>
                    <Item noSpace>
                        <Button variant="text" text="Sign Up" onClick={SignUp} />
                    </Item>
                </Item>
            </Container>
        );
    }
}

export default AboutMe;