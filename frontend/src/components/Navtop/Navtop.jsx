
import './Navtop.scss';
import React, { PureComponent, Fragment } from 'react';
import { HashLink } from 'react-router-hash-link';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import Tooltip from "@material-ui/core/Tooltip";

import {Container, Item} from 'components/Content';
import LineMenu from 'svg/LineMenu';
import Logo from 'svg/Logo';
import SignOut from 'svg/SignOut';
import menu from '../../menu.js';

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

const scroll = el => el.scrollIntoView({ behavior: 'smooth', block: 'start' });

class Navtop extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            anchorMenu: false,
        };
    }

    componentDidMount() {
        const { userSigningAuth, userId } = this.props;
        userSigningAuth(userId);
    }

    toggleDrawer = (side, open) => () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                [side]: open,
            }
        });
    };

    render() {
        const {user} = this.props;
        const { anchorMenu } = this.state;
        const openMenu = Boolean(anchorMenu);

        return (
            <Fragment>
                <AppBar component="nav" position="fixed" color="inherit">
                    <Container box>
                        <Item xs={12} noSpace>
                            <Toolbar>
                                <HashLink
                                    scroll={scroll}
                                    to="#top"
                                    className="link"
                                    aria-label="Abz"
                                >
                                    <Logo className="logo _navtop" />
                                </HashLink>
                                <div className="grow">
                                    <Container className="section _desctop" justify="center">
                                        {Object.keys(menu).map(link => (
                                            <HashLink
                                                scroll={scroll}
                                                to={link}
                                                className="link"
                                                key={link}
                                                aria-label={menu[link]}
                                            >
                                                <Item>
                                                    <Typography className="text _link">
                                                        {menu[link]}
                                                    </Typography>
                                                </Item>
                                            </HashLink>
                                        ))}
                                    </Container>
                                </div>
                                {user ?
                                    <div className="user section _desctop" wrap="nowrap">
                                        <div className="user__info">
                                            <Tooltip title={user.name} aria-label={user.name}>
                                                <Typography className="paragraph _small _ellipsis">
                                                    {user.name}
                                                </Typography>
                                            </Tooltip>
                                            <Tooltip title={user.email} aria-label={user.email}>
                                                <Typography className="paragraph _small _ellipsis _email">
                                                    {user.email}
                                                </Typography>
                                            </Tooltip>
                                        </div>
                                        <div>
                                            <img className="user__image" src={user.photo} alt=""/>
                                        </div>
                                        <div className="user__icon">
                                            <SignOut className="icon _s" />
                                        </div>
                                    </div>
                                    : ''
                                }
                                <div className="section _mobile">
                                    <IconButton className="menu__button _right"
                                                aria-label="Menu"
                                                aria-owns={openMenu ? 'menu-appbar' : undefined}
                                                aria-haspopup="true"
                                                onClick={this.toggleDrawer("anchorMenu", true)}
                                    >
                                        <LineMenu className="icon _s" />
                                    </IconButton>
                                </div>
                            </Toolbar>
                        </Item>
                    </Container>
                </AppBar>
                <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS}
                                 open={openMenu}
                                 onClose={this.toggleDrawer('anchorMenu', false)}
                                 onOpen={this.toggleDrawer('anchorMenu', true)}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('anchorMenu', false)}
                        onKeyDown={this.toggleDrawer('anchorMenu', false)}
                        className="mobile-menu"
                    >
                        <List component="nav">
                            {user ?
                                <div className="user">
                                    <div>
                                        <img className="user__image" src={user.photo} alt=""/>
                                    </div>
                                    <div className="user__info">
                                        <Typography className="paragraph _name _ellipsis">
                                            {user.name}
                                        </Typography>
                                        <Typography className="paragraph _small _ellipsis _email">
                                            {user.email}
                                        </Typography>
                                    </div>
                                </div>
                                : ''
                            }
                            <Divider />
                            {Object.keys(menu).map(link => (
                                <HashLink
                                    scroll={scroll}
                                    to={link}
                                    className="link"
                                    key={link}
                                    aria-label={menu[link]}
                                >
                                    <ListItem button className="">
                                        <ListItemText primary={menu[link]}/>
                                    </ListItem>
                                </HashLink>
                            ))}
                            <HashLink
                                scroll={scroll}
                                to="#top"
                                className="link"
                                aria-label="Sign Out"
                            >
                                <ListItem button>
                                    <ListItemText primary="Sign Out"/>
                                </ListItem>
                            </HashLink>
                        </List>
                    </div>
                </SwipeableDrawer>
            </Fragment>
        );
    }
}

export default Navtop;