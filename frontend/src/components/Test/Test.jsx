import './Test.scss';

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Typography from "@material-ui/core/Typography";
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import { handleInputChange } from 'efi/handleChange';
import Button from 'components/Button';

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

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
                <TextField
                    id="outlined1"
                    label="Label"
                    margin="normal"
                    color="secondary"
                    placeholder="Placeholder"
                    helperText="Assistive text"
                    variant="outlined"
                />
                <br/>
                <TextField
                    id="outlined1"
                    label="Label"
                    margin="normal"
                    color="secondary"
                    placeholder="Placeholder"
                    helperText="Assistive text"
                    variant="outlined"
                    error
                />

                <TextField
                    id="outlined-select-currency"
                    select
                    fullWidth
                    label="Select"
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