import React, { Component, Fragment } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Container, withStyles } from '@material-ui/core';
import { Header, Login, WellsList } from '../components';

const styles = theme => ({
    containerRoot: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

class Main extends Component {
    render() {
        const { user, classes } = this.props;
        return (
            <Fragment>
                <Header isAuthenticated={user.isLogged} />
                <Container classes={{ root: classes.containerRoot }}>
                    {user.isLogged ? <WellsList /> : <Login />}
                </Container>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    well: state.well,
    user: state.user,
    wells: state.wells,
});

const mapDispatchToProps = {};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withStyles(styles)
)(Main);
