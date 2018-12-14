import './OurUsers.scss';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";

import {Container, Item} from "components/Content";
import Button from 'components/Button';

class OurUsers extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            nextUsers: !!this.props.ourUsers.nextUrl,
        }
    }

    componentDidMount() {
        const { ourUsersFirstGetting } = this.props;
        ourUsersFirstGetting();
    }

    nextPage = () => {
        const {ourUsersNextGetting, ourUsers} = this.props;
        if (ourUsers.nextUrl) {
            ourUsersNextGetting(ourUsers.nextUrl);
        } else {
            console.log(this.state.nextUsers);
        }
    };

    render() {
        const {ourUsers} = this.props;
        return (
            <div className="ourusers">
                <Container box>
                    <Item xs={12}>
                        <Typography variant="h2" align="center">
                            Our cheerful users
                        </Typography>
                    </Item>
                    <Item xs={12} noSpace>
                        <Typography variant="h5" align="center">
                            Attention! Sorting users by registration date
                        </Typography>
                    </Item>
                    <Item xs={12} noSpace container>
                        {ourUsers.users ? ourUsers.users.map(item => {
                            return (
                                <Item key={item.id} md={4} wrap="nowrap" container>
                                    <Item noSpace xs={3}>
                                        <img className="ourusers__photo" src={item.photo} alt={item.name}/>
                                    </Item>
                                    <Item noSpace xs={9}>
                                        <Typography variant="h4">
                                            {item.name}
                                        </Typography>
                                        <Typography className="_ellipsis">
                                            {item.position}
                                        </Typography>
                                        <Typography className="_ellipsis">
                                            {item.email}
                                        </Typography>
                                        <Typography className="_ellipsis">
                                            {item.phone}
                                        </Typography>
                                    </Item>
                                </Item>
                            );
                        }) : ''}
                    </Item>
                    <Item xs={12} noSpace container justify="center">
                        <Button variant="outlined" text="Show more" onClick={this.nextPage}/><br/>
                    </Item>
                </Container>
            </div>
        );
    }
}

export default OurUsers;