import './Relationships.scss';

import React, { PureComponent } from 'react';
import Typography from "@material-ui/core/Typography";

import {Container, Item} from "components/Content";

import HtmlIcon from "svg/html.svg";
import CssIcon from "svg/css.svg";
import JsIcon from "svg/javascript.svg";

class Relationships extends PureComponent {
    render() {
        return (
            <Container component="section" className="relationships" box justify="center">
                <Item md={10} lg={8} xl={6}>
                    <Typography variant="h2" align="center">
                        About my relationships with
                        web-development
                    </Typography>
                </Item>
                <Item noSpace xs={12} container justify="flex-end">
                    <Item md={12} lg={4} container className="relationships__item">
                        <Item xs={12} md={3} lg={12} noSpace>
                            <img className="relationships__iamage" src={HtmlIcon} alt="Me"/>
                        </Item>
                        <Item xs={12} md={9} lg={12} noSpace className="relationships__about">
                            <Typography variant="h3">
                                I'm in love with HTML
                            </Typography>
                            <Typography className="relationships__text">
                                Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications.
                            </Typography>
                        </Item>
                    </Item>
                    <Item xs={12} md={12} lg={4} container className="relationships__item">
                        <Item xs={12} md={3} lg={12} noSpace>
                            <img className="relationships__iamage" src={CssIcon} alt="Me"/>
                        </Item>
                        <Item xs={12} md={9} lg={12} noSpace className="relationships__about">
                            <Typography variant="h3">
                                CSS is my best friend
                            </Typography>
                            <Typography className="relationships__text">
                                Cascading Style Sheets (CSS) is a  style sheet language used for describing the presentation
                                of a document written in a markup language
                                like HTML.
                            </Typography>
                        </Item>
                    </Item>
                    <Item xs={12} md={12} lg={4} container className="relationships__item">
                        <Item xs={12} md={3} lg={12} noSpace>
                            <img className="relationships__iamage" src={JsIcon} alt="Me"/>
                        </Item>
                        <Item xs={12} md={9} lg={12} noSpace className="relationships__about">
                            <Typography variant="h3">
                                JavaScript is my passion
                            </Typography>
                            <Typography className="relationships__text">
                                JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.
                            </Typography>
                        </Item>
                    </Item>
                </Item>
            </Container>
        );
    }
}

export default Relationships;