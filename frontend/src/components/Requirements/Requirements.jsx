import './Requirements.scss';

import React, { PureComponent } from 'react';
import Typography from "@material-ui/core/Typography";

import {Container, Item} from "components/Content";
import ManLaptop1 from 'svg/man-laptop-v1.svg';
import ManLaptop2 from 'svg/man-laptop-v2.svg';

class Requirements extends PureComponent {
    render() {
        return (
            <section className="requirements">
                <Container box justify="center">
                    <Item xs={12} md={8} lg={12} className="requirements__caption">
                        <Typography variant="h2" align="center" color="secondary">
                            General requirements for the test task
                        </Typography>
                    </Item>
                    <Item xs={12} md={6} className="requirements__text-box">
                        <Typography className="requirements__text" color="secondary">
                            Users want to find answers to their questions quickly and data shows that people really care about how quickly their pages load. The Search team announced speed would be a ranking signal for desktop searches in 2010 and as of this month (July 2018), page speed will be a ranking factor for mobile searches too.
                        </Typography>
                        <Typography className="requirements__text" color="secondary">
                            If you're a developer working on a site, now is a good time to evaluate your performance using our speed tools. Think about how performance affects the user experience of your pages and consider measuring a variety of real-world user-centric performance metrics.
                        </Typography>
                        <Typography className="requirements__text" color="secondary">
                            Are you shipping too much JavaScript? Too many images? Images and JavaScript are the most significant contributors to the page weight that affect page load time based on data from HTTP Archive and the Chrome User Experience Report - our public dataset for key UX metrics as experienced by Chrome users under real-world conditions.
                        </Typography>
                    </Item>
                    <Item xs={12} md={6}>
                        <img className="requirements__man section _mdnone" src={ManLaptop1} alt="Laptop"/>
                        <img className="requirements__man section _md" src={ManLaptop2} alt="Laptop"/>
                    </Item>
                </Container>
            </section>
        );
    }
}

export default Requirements;