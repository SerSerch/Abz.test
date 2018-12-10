
import './Navtop.scss';
import React, { PureComponent, Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Menu from '@material-ui/core/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import Divider from '@material-ui/core/Divider';
import SendIcon from '@material-ui/icons/Send';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import {Container, Item} from 'components/Content';
import LineMenu from 'svg/LineMenu';
import Logo from 'svg/Logo';

const caption = {
    "/#aboutme-hash": "About Me",
    "/#relationships-hash": "Relationships",
    "/#requirements-hash": "Requirements",
    "/#users-hash": "Users",
    "/#signup-hash": "Sign Up",
};
const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

class Navtop extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            anchorMenu: false,
        };
    }

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const { anchorMenu } = this.state;
        const openMenu = Boolean(anchorMenu);

        return (
            <Fragment>
                <AppBar position="fixed" color="inherit">
                    <Container box>
                        <Item xs={12} noSpace>
                            <Toolbar>
                                <Link to="/" className="link">
                                    <Logo className="logo _navtop" />
                                </Link>
                                <div className="grow">
                                    <Container className="section _desctop" justify="center">
                                        {Object.keys(caption).map(link => (
                                            <HashLink to={link} className="link" key={link}>
                                                <Item>
                                                    <Typography>
                                                        {caption[link]}
                                                    </Typography>
                                                </Item>
                                            </HashLink>
                                        ))}
                                    </Container>
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
                                <HashLink to={link} className="link" key={link}>
                                    <ListItem button>
                                        <ListItemText primary={caption[link]}/>
                                    </ListItem>
                                </HashLink>
                            ))}
                            <Link to="/test" className="link">
                                <ListItem button>
                                    <ListItemText primary="Тест" />
                                </ListItem>
                            </Link>
                        </List>
                    </div>
                </SwipeableDrawer>
            </Fragment>
        );
    }
}

export default withRouter(Navtop);