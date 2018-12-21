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
                            aria-label="Abz"
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
                            aria-label={menu[link]}
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
                        <a
                            href="mailto:work.of.future@gmail.com"
                            className="footer__line-contacts link _s"
                            aria-label="mail"
                        >
                            <Typography className="text _link">
                                <Mail className="footer__icon icon _p" />
                                <span className="footer__contacts">work.of.future@gmail.com</span>
                            </Typography>
                        </a>
                        <a
                            href="tel:+380507892498"
                            className="footer__line-contacts link _s"
                            aria-label="phone"
                        >
                            <Typography className="text _link">
                                <Phone className="footer__icon icon _p" />
                                <span className="footer__contacts">+38 (050) 789 24 98</span>
                            </Typography>
                        </a>
                        <a
                            href="tel:+380955560845"
                            className="footer__line-contacts link _s"
                            aria-label="phone"
                        >
                            <Typography className="text _link">
                                <Cellphone  className="footer__icon icon _p" />
                                <span className="footer__contacts">+38 (095) 556 08 45</span>
                            </Typography>
                        </a>
                    </Item>
                    <Item xs={12} md={2} className="footer__colum">
                        <Link to="#" className="footer__link link _s" aria-label="news">
                            <Typography className="text _link">
                                News
                            </Typography>
                        </Link>
                        <Link to="#" className="footer__link link _s" aria-label="blog">
                            <Typography className="text _link">
                                Blog
                            </Typography>
                        </Link>
                        <Link to="#" className="footer__link link _s" aria-label="partners">
                            <Typography className="text _link">
                                Partners
                            </Typography>
                        </Link>
                        <Link to="#" className="footer__link link _s" aria-label="shop">
                            <Typography className="text _link">
                                Shop
                            </Typography>
                        </Link>
                    </Item>
                    <Item xs={12} md={2} className="footer__colum">
                        <Link to="#" className="footer__link link _s" aria-label="overview">
                            <Typography className="text _link">
                                Overview
                            </Typography>
                        </Link>
                        <Link to="#" className="footer__link link _s" aria-label="design">
                            <Typography className="text _link">
                                Design
                            </Typography>
                        </Link>
                        <Link to="#" className="footer__link link _s" aria-label="code">
                            <Typography className="text _link">
                                Code
                            </Typography>
                        </Link>
                        <Link to="#" className="footer__link link _s" aria-label="collaborate">
                            <Typography className="text _link">
                                Collaborate
                            </Typography>
                        </Link>
                    </Item>
                    <Item xs={12} md={2} className="footer__colum">
                        <Link to="#" className="footer__link link _s" aria-label="tutorials">
                            <Typography className="text _link">
                                Tutorials
                            </Typography>
                        </Link>
                        <Link to="#" className="footer__link link _s" aria-label="resources">
                            <Typography className="text _link">
                                Resources
                            </Typography>
                        </Link>
                        <Link to="#" className="footer__link link _s" aria-label="guides">
                            <Typography className="text _link">
                                Guides
                            </Typography>
                        </Link>
                        <Link to="#" className="footer__link link _s" aria-label="examples">
                            <Typography className="text _link">
                                Examples
                            </Typography>
                        </Link>
                    </Item>
                    <Item xs={12} md={2} className="footer__colum">
                        <Link to="#" className="footer__link link _s" aria-label="faq">
                            <Typography className="text _link">
                                FAQ
                            </Typography>
                        </Link>
                        <Link to="#" className="footer__link link _s" aria-label="terms">
                            <Typography className="text _link">
                                Terms
                            </Typography>
                        </Link>
                        <Link to="#" className="footer__link link _s" aria-label="conditions">
                            <Typography className="text _link">
                                Conditions
                            </Typography>
                        </Link>
                        <Link to="#" className="footer__link link _s" aria-label="help">
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
                            <a href="#" className="footer__soc link _s" aria-label="facebook">
                                <Facebook className="icon _p" />
                            </a>
                            <a href="#" className="footer__soc link _s" aria-label="linkedin">
                                <Linkedin className="icon _p" />
                            </a>
                            <a href="#" className="footer__soc link _s" aria-label="instagram">
                                <Instagram className="icon _p" />
                            </a>
                            <a href="#" className="footer__soc link _s" aria-label="twitter">
                                <Twitter className="icon _p" />
                            </a>
                            <a href="#" className="footer__soc link _s" aria-label="pinterest">
                                <Pinterest className="icon _p" />
                            </a>
                        </Item>
                    </Item>
                </Container>
            </footer>
        );
    }
}

export default Footer;