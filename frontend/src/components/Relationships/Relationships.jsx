import './Relationships.scss';

import React, { PureComponent } from 'react';
import Typography from "@material-ui/core/Typography";

import {Container, Item} from "components/Content";

import HtmlIcon from "svg/html.svg";
import CssIcon from "svg/css.svg";
import JsIcon from "svg/javascript.svg";
import ManMobile from "svg/man-mobile.svg";

class Relationships extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
  
    render() {
        return (
            <Container className="aboutme" box justify="center">
                <Item md={10} lg={6}>
                    <Typography variant="h2" align="center">
                        About my relationships with
                        web-development
                    </Typography>
                </Item>
                <Item noSpace xs={12} container>
                        <Item xs={12} lg={4}>
                            <img src={HtmlIcon} alt="Me"/>
                            <Typography variant="h3">
                                I'm in love with HTML
                            </Typography>
                            <Typography>
                                Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications.
                            </Typography>
                        </Item>
                        <Item xs={12} lg={4}>
                            <img src={CssIcon} alt="Me"/>
                            <Typography variant="h3">
                                CSS is my best friend
                            </Typography>
                            <Typography>
                                Cascading Style Sheets (CSS) is a  style sheet language used for describing the presentation
                                of a document written in a markup language
                                like HTML.
                            </Typography>
                        </Item>
                        <Item xs={12} lg={4}>
                            <img src={JsIcon} alt="Me"/>
                            <Typography variant="h3">
                                JavaScript is my passion
                            </Typography>
                            <Typography>
                                JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.
                            </Typography>
                        </Item>
                </Item>
            </Container>
        );
    }
}

export default Relationships;