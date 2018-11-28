import './Test.scss';

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Typography from "@material-ui/core/Typography";
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import MenuItemM from '@material-ui/core/MenuItem';

import { handleInputChange } from 'efi/handleChange';
import Button from 'components/Button';
import Input from 'components/Input';

import {withStyles} from "@material-ui/core";

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

const MenuItem = withStyles(stylesMenuItem)(MenuItemM);

class Test extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            currency: '',
        };
    }

    onHandleInputChange = (event) => {
        handleInputChange(event, this);
    };

    alertT = () => alert('s');

    render() {
        return (
            <div className="test">
                <Typography variant="h1">
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
                    type="text"
                    variant="outlined"
                    label="Label"
                    placeholder="Placeholder"
                    helperText="Assistive text"
                    margin="normal"
                    color="secondary"
                />

                <Input
                    id="outlined2"
                    type="text"
                    variant="outlined"
                    label="Label"
                    placeholder="Placeholder"
                    helperText="Assistive text"
                    value="Input text"
                    margin="normal"
                    color="secondary"
                    error
                    required
                />
                <br/>

                <TextField
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
                    color="inte"
                >
                    {currencies.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
        );
    }
}

export default Test;