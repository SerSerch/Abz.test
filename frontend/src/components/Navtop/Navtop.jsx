
import './Navtop.scss';
import React, { PureComponent, Fragment } from 'react';
import { HashLink } from 'react-router-hash-link';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import {Container, Item} from 'components/Content';
import LineMenu from 'svg/LineMenu';
import Logo from 'svg/Logo';

const caption = {
    "#aboutme": "About Me",
    "#relationships": "Relationships",
    "#requirements": "Requirements",
    "#users": "Users",
    "#signup": "Sign Up",
};
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
        const { userSigningAuth, userGettingToken } = this.props;
        userGettingToken();
        userSigningAuth(1);
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
                                >
                                    <Logo className="logo _navtop" />
                                </HashLink>
                                <div className="grow">
                                    <Container className="section _desctop" justify="center">
                                        {Object.keys(caption).map(link => (
                                            <HashLink
                                                scroll={scroll}
                                                to={link}
                                                className="link"
                                                key={link}
                                            >
                                                <Item>
                                                    <Typography>
                                                        {caption[link]}
                                                    </Typography>
                                                </Item>
                                            </HashLink>
                                        ))}
                                    </Container>
                                </div>
                                <div className="user section _desctop">

                                </div>
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
                    >
                        <List component="nav">
                            <ListItem button onClick={this.toggleDrawer}>
                                <ListItemIcon>
                                    <ChevronLeftIcon />
                                </ListItemIcon>
                            </ListItem>
                            <Divider />
                            {Object.keys(caption).map(link => (
                                <HashLink
                                    scroll={scroll}
                                    to={link}
                                    className="link"
                                    key={link}
                                >
                                    <ListItem button>
                                        <ListItemText primary={caption[link]}/>
                                    </ListItem>
                                </HashLink>
                            ))}
                        </List>
                    </div>
                </SwipeableDrawer>
            </Fragment>
        );
    }
}

export default Navtop;