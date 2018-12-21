import './Footer.scss';

import React, { PureComponent } from 'react';
import {Container, Item} from "components/Content";
import { Link } from 'react-router-dom';
import Typography from "@material-ui/core/Typography";
import Divider from '@material-ui/core/Divider';

import Logo from "svg/Logo";
import {HashLink} from "react-router-hash-link";
import menu from '../../menu.js';
import Mail from "svg/Mail";
import Phone from "svg/Phone";
import Cellphone from "svg/Cellphone";
import Twitter from "svg/Twitter";
import Facebook from "svg/Facebook";
import Linkedin from "svg/Linkedin";
import Instagram from "svg/Instagram";
import Pinterest from "svg/Pinterest";

const scroll = el => el.scrollIntoView({ behavior: 'smooth', block: 'start' });

class Footer extends PureComponent {
    render() {
        return (
            <footer className="footer">
                <Container box>
                    <Item xs={12} md={'auto'}>
                        <HashLink
                            scroll={scroll}
                            to="#top"
                            className="footer__menu-link link"
                        >
                            <Logo className="logo _navbot" />
                        </HashLink>
                    </Item>
                    <div className="grow"></div>
                    {Object.keys(menu).map(link => (
                        <HashLink
                            scroll={scroll}
                            to={link}
                            className="footer__menu-link link _s"
                            key={link}
                        >
                            <Item xs={12} md={'auto'} className="footer__menu-item">
                                <Typography className="text _link">
                                    {menu[link]}
                                </Typography>
                            </Item>
                        </HashLink>
                    ))}
                    <Item xs={12} noSpace className="footer__divider">
                        <Divider />
                    </Item>
                    <Item xs={12} md={4}>
                        <Link to="#" className="footer__line-contacts link _s">
                            <Typography className="text _link">
                                <Mail className="footer__icon icon _p" />
                                <span className="footer__contacts">work.of.future@gmail.com</span>
                            </Typography>
                        </Link>
                        <Link to="#" className="footer__line-contacts link _s">
                            <Typography className="text _link">
                                <Phone className="footer__icon icon _p" />
                                <span className="footer__contacts">+38 (050) 789 24 98</span>
                            </Typography>
                        </Link>
                        <Link to="#" className="footer__line-contacts link _s">
                            <Typography className="text _link">
                                <Cellphone  className="footer__icon icon _p" />
                                <span className="footer__contacts">+38 (095) 556 0845</span>
                            </Typography>
                        </Link>
                    </Item>
                    <Item xs={12} md={2} className="footer__colum">
                        <Link to="#" className="footer__link link _s">
                            <Typography className="text _link">
                                News
                            </Typography>
                        </Link>
                        <Link to="#" className="footer__link link _s">
                            <Typography className="text _link">
                                Blog
                            </Typography>
                        </Link>
                        <Link to="#" className="footer__link link _s">
                            <Typography className="text _link">
                                Partners
                            </Typography>
                        </Link>
                        <Link to="#" className="footer__link link _s">
                            <Typography className="text _link">
                                Shop
                            </Typography>
                        </Link>
                    </Item>
                    <Item xs={12} md={2} className="footer__colum">
                        <Link to="#" className="footer__link link _s">
                            <Typography className="text _link">
                                Overview
                            </Typography>
                        </Link>
                        <Link to="#" className="footer__link link _s">
                            <Typography className="text _link">
                                Design
                            </Typography>
                        </Link>
                        <Link to="#" className="footer__link link _s">
                            <Typography className="text _link">
                                Code
                            </Typography>
                        </Link>
                        <Link to="#" className="footer__link link _s">
                            <Typography className="text _link">
                                Collaborate
                            </Typography>
                        </Link>
                    </Item>
                    <Item xs={12} md={2} className="footer__colum">
                        <Link to="#" className="footer__link link _s">
                            <Typography className="text _link">
                                Tutorials
                            </Typography>
                        </Link>
                        <Link to="#" className="footer__link link _s">
                            <Typography className="text _link">
                                Resources
                            </Typography>
                        </Link>
                        <Link to="#" className="footer__link link _s">
                            <Typography className="text _link">
                                Guides
                            </Typography>
                        </Link>
                        <Link to="#" className="footer__link link _s">
                            <Typography className="text _link">
                                Examples
                            </Typography>
                        </Link>
                    </Item>
                    <Item xs={12} md={2} className="footer__colum">
                        <Link to="#" className="footer__link link _s">
                            <Typography className="text _link">
                                FAQ
                            </Typography>
                        </Link>
                        <Link to="#" className="footer__link link _s">
                            <Typography className="text _link">
                                Terms
                            </Typography>
                        </Link>
                        <Link to="#" className="footer__link link _s">
                            <Typography className="text _link">
                                Conditions
                            </Typography>
                        </Link>
                        <Link to="#" className="footer__link link _s">
                            <Typography className="text _link">
                                Help
                            </Typography>
                        </Link>
                    </Item>
                    <Item xs={12} container noSpace className="footer__last">
                        <Item xs={12} md={'auto'} noSpace className="footer__copy">
                            <Typography className="paragraph _smalled" color="secondary">
                                &copy;&nbsp;abz.agency specially for the test task
                            </Typography>
                        </Item>
                        <div className="grow"></div>
                        <Item noSpace className="footer__soc-box">
                            <Link to="#" className="footer__soc link _s">
                                <Twitter className="icon _p" />
                            </Link>
                            <Link to="#" className="footer__soc link _s">
                                <Facebook className="icon _p" />
                            </Link>
                            <Link to="#" className="footer__soc link _s">
                                <Linkedin className="icon _p" />
                            </Link>
                            <Link to="#" className="footer__soc link _s">
                                <Instagram className="icon _p" />
                            </Link>
                            <Link to="#" className="footer__soc link _s">
                                <Pinterest className="icon _p" />
                            </Link>
                        </Item>
                    </Item>
                </Container>
            </footer>
        );
    }
}

export default Footer;