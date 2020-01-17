import React, { Component, Fragment } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Container, withStyles, Grid } from '@material-ui/core';
import { Header, Login, WellsList } from './index';
import { getWells, getSession } from '../store/actions';
import Loading from './Loading';

const styles = theme => ({
    containerRoot: {
        height: '100%',
    },
    gridContainerRoot: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

class Main extends Component {
    componentDidMount() {
        this.props.findSession();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.user.isLogged !== this.props.user.isLogged) {
            this.props.loadWells();
        }
    }

    render() {
        const { user, classes, wells } = this.props;
        return (
            <Fragment>
                <Loading isLoading />
                <Header isAuthenticated={user.isLogged} />
                <Container classes={{ root: classes.containerRoot }}>
                    <Grid
                        container
                        classes={{ root: classes.gridContainerRoot }}
                    >
                        {user.isLogged ? (
                            <WellsList wells={wells} />
                        ) : (
                            <Login />
                        )}
                    </Grid>
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

const mapDispatchToProps = dispatch => ({
    loadWells: () => dispatch(getWells()),
    findSession: () => dispatch(getSession()),
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withStyles(styles)
)(Main);
