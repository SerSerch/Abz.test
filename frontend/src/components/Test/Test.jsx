import './Test.scss';

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import {withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Divider from '@material-ui/core/Divider';
import MenuItemM from '@material-ui/core/MenuItem';
import Tooltip from '@material-ui/core/Tooltip';
import Paper from '@material-ui/core/Paper';

import { handleInputChange } from 'efi/handleChange';
import Button from 'components/Button';
import Input from 'components/Input';
import {Container, Item} from 'components/Content';

import CaretDown from 'svg/CaretDown';
import Cellphone from 'svg/Cellphone';
import Facebook from "svg/Facebook";
import Instagram from "svg/Instagram";
import LineMenu from "svg/LineMenu";
import Linkedin from "svg/Linkedin";
import Mail from "svg/Mail";
import Phone from "svg/Phone";
import Pinterest from "svg/Pinterest";
import SignOut from "svg/SignOut";
import Twitter from "svg/Twitter";
import Upload from "svg/Upload";

import CssIcon from 'svg/css.svg';
import HtmlIcon from 'svg/html.svg';
import Javascript from 'svg/javascript.svg';
import Man1 from 'svg/man-laptop-v1.svg';
import Man2 from 'svg/man-laptop-v2.svg';
import ManMobile from 'svg/man-mobile.svg';

const currencies = [
    {
        value: 'USD',
        label: 'Selected item',
    },
    {
        value: 'EUR',
        label: 'Second item',
    },
    {
        value: 'BTC',
        label: 'Thurd item',
    },
];

const stylesMenuItem = theme => ({
    selected: {
        backgroundColor: 'inherit !important',
        color: '#fc831f',
    }
});

const styles = theme => ({
    paper: {
        height: 140,
        padding: 10,
    },
});

const MenuItem = withStyles(stylesMenuItem)(MenuItemM);

class Test extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            currency: '',
            showPassword: false,
            inputName: '',
        };
    }

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    onHandleInputChange = (event) => {
        handleInputChange(event, this);
    };

    render() {
        const { classes } = this.props;
        
        return (
            <div className="test">
                <Container box>
                    <Item noSpace xs={6}>
                        <Container>
                            <Item xs={6}>
                                3
                            </Item>
                            <Item xs={6}>
                                3
                            </Item>
                        </Container>
                    </Item>
                </Container>
                <Container box>
                        {[0, 1, 2].map(value => (
                            <Item key={value} xs={12} sm={6} md={4} lg={3} xl={6}>
                                <Paper className={classes.paper} />
                            </Item>
                        ))}
                </Container>
                <Typography variant="h1" className="_ellipsis">
                    Lorem ipsum dolor sit amet.
                </Typography>
                <Typography variant="h2">
                    Lorem ipsum dolor sit amet.
                </Typography>
                <Typography variant="h3">
                    Lorem ipsum dolor sit amet.
                </Typography>
                <Typography variant="h4">
                    Lorem ipsum dolor sit amet.
                </Typography>
                <Typography variant="h5">
                    Lorem ipsum dolor sit amet.
                </Typography>
                <Typography variant="body1">
                    Lorem ipsum dolor sit amet.
                </Typography>
                <Typography variant="body2">
                    Lorem ipsum dolor sit amet.
                </Typography>
                <Typography className="paragraph _small">
                    Lorem ipsum dolor sit amet.
                </Typography>

                <Divider />

                <Button variant="contained" text="Primary" />
                <Button variant="outlined" text="Secondary"/><br/>
                <Button variant="text" text="Text" />
                <Button variant="contained" text="Disabled" disabled />

                <Divider />

                <Link className="link" to="#">Link</Link>
                <Link className="link _s _bg-s" to="#">Link</Link>

                <Divider />

                <Input
                    id="outlined1"
                    name="inputName"
                    type="text"
                    variant="outlined"
                    label="Disabled"
                    placeholder="Placeholder"
                    helperText="Assistive text"
                    margin="normal"
                    color="secondary"
                    value={this.state.inputName}
                    onChange={this.onHandleInputChange}
                    disabled
                />

                <Input
                    id="outlined2"
                    name="inputName"
                    type="text"
                    variant="outlined"
                    label="Error"
                    placeholder="Placeholder"
                    helperText="Assistive text"
                    margin="normal"
                    value={this.state.inputName}
                    onChange={this.onHandleInputChange}
                    error
                    required
                />
                <Input
                    id="outlined3"
                    name="inputName"
                    type="password"
                    variant="outlined"
                    label="Password"
                    placeholder="Placeholder"
                    helperText="Assistive text"
                    margin="normal"
                    value={this.state.inputName}
                    onChange={this.onHandleInputChange}
                    onShowPass={this.handleClickShowPassword}
                    show={this.state.showPassword}
                    required
                />
                <br/>

                <Input
                    id="outlined-select-currency"
                    select
                    fullWidth
                    label="Label text"
                    name="currency"
                    value={this.state.currency}
                    onChange={this.onHandleInputChange}
                    helperText="Please select your currency"
                    margin="normal"
                    variant="outlined"
                >
                    {currencies.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Input>
                <br/>
                <Twitter className="icon _p _bg-s" />
                <Facebook className="icon _p _bg-s" />
                <Linkedin className="icon _p _bg-s" />
                <Instagram className="icon _p _bg-s" />
                <Pinterest className="icon _p _bg-s" />
                <Mail className="icon _p _bg-s" />
                <Phone className="icon _p _bg-s" />
                <Cellphone  className="icon _p _bg-s" />
                <SignOut className="icon _s" />
                <LineMenu className="icon _s" />
                <CaretDown className="icon _s _disable" />
                <Upload className="icon _s _disable" />
                <br/>
                <img src={CssIcon} alt=""/>
                <img src={HtmlIcon} alt=""/>
                <img src={Javascript} alt=""/>
                <img src={Man1} alt=""/>
                <img src={Man2} alt=""/>
                <img src={ManMobile} alt=""/>
                <br/>
                <Tooltip title="verylongtext" aria-label="verylongtext"><span>Lorem ipsum.</span></Tooltip>
            </div>
        );
    }
}

export default withStyles(styles)(Test);