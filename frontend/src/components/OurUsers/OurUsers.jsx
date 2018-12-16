import './OurUsers.scss';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Typography from "@material-ui/core/Typography";

import {Container, Item} from "components/Content";
import Button from 'components/Button';

import DefaultUserImg from './img/user.png';

class OurUsers extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            nextUsers: true,
        }
    }

    componentDidMount() {
        const { ourUsersFirstGetting } = this.props;
        ourUsersFirstGetting();
    }

    nextPage = () => {
        const {ourUsersNextGetting, nextUrl} = this.props;
        if (nextUrl) {
            ourUsersNextGetting(nextUrl);
        } else {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    nextUsers: false,
                }
            });
        }
    };

    addDefaultSrc = (ev) => {
        ev.target.src = DefaultUserImg;
    }

    render() {
        const {users, nextUrl, clippingUsers} = this.props;
        const {nextUsers} = this.state;
        const userClasses = classNames(
            'ourusers__item',
            {
                'section _user': nextUsers,
            }
        );
        const buttonNextClasses = classNames(
            {
                '_hidden': !nextUrl,
                '_mobile': nextUsers,
            }
        );

        return (
            <section className="ourusers">
                <Container box justify="center">
                    <Item xs={12}>
                        <Typography variant="h2" align="center">
                            Our cheerful users
                        </Typography>
                    </Item>
                    <Item xs={6} jg={12} noSpace>
                        <Typography variant="h5" align="center">
                            Attention! Sorting users by registration date
                        </Typography>
                    </Item>
                    <Item xs={12} noSpace container className="ourusers__box-users">
                        {users ? users.slice(0, clippingUsers).map(item => {
                                return (
                                    <Item key={item.id} md={4} container className="ourusers__item">
                                        <Item noSpace xs={12} lg={3} xl={2}>
                                            <img className="ourusers__photo" onError={this.addDefaultSrc} src={item.photo} alt={item.name}/>
                                        </Item>
                                        <Item noSpace xs={12} lg={9} xl={10} className="ourusers__description">
                                            <Typography variant="h4" className="ourusers__name _ellipsis">
                                                {item.name}
                                            </Typography>
                                            <Typography className="paragraph _small _ellipsis">
                                                {item.position}
                                            </Typography>
                                            <Typography className="paragraph _small _ellipsis">
                                                {item.email}
                                            </Typography>
                                            <Typography className="paragraph _small _ellipsis">
                                                {item.phone.replace(
                                                    /(\+?\d{0,2})(\d{3})(\d{3})(\d{2})(\d{2})$/g,
                                                    '$1 ($2) $3 $4 $5'
                                                )}
                                            </Typography>
                                        </Item>
                                    </Item>
                                );
                            })
                            : ''}
                        {users ? users.slice(clippingUsers).map(item => {
                                return (
                                    <Item key={item.id} md={4} container className={userClasses}>
                                        <Item noSpace xs={12} lg={3} xl={2}>
                                            <img className="ourusers__photo" onError={this.addDefaultSrc} src={item.photo} alt={item.name}/>
                                        </Item>
                                        <Item noSpace xs={12} lg={9} xl={10} className="ourusers__description">
                                            <Typography variant="h4" className="ourusers__name _ellipsis">
                                                {item.name}
                                            </Typography>
                                            <Typography className="paragraph _small _ellipsis">
                                                {item.position}
                                            </Typography>
                                            <Typography className="paragraph _small _ellipsis">
                                                {item.email}
                                            </Typography>
                                            <Typography className="paragraph _small _ellipsis">
                                                {item.phone.replace(
                                                    /(\+?\d{0,2})(\d{3})(\d{3})(\d{2})(\d{2})$/g,
                                                    '$1 ($2) $3 $4 $5'
                                                )}
                                            </Typography>
                                        </Item>
                                    </Item>
                                );
                            })
                            : ''}
                    </Item>
                    <Item xs={12} noSpace container justify="center">
                        <Button
                            variant="outlined"
                            text="Show more"
                            onClick={this.nextPage}
                            className={buttonNextClasses}
                        />
                    </Item>
                </Container>
            </section>
        );
    }
}

export default OurUsers;