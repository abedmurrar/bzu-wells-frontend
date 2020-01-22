import React, { Component, Fragment } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Container, withStyles, Grid } from '@material-ui/core';
import { Header, Login, WellsList } from './index';
import { getSession } from '../store/actions';
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

    render() {
        const { user, classes, loader } = this.props;
        return (
            <Fragment>
                <Loading isLoading={loader.isLoading} />
                <Header user={user} />
                <Container classes={{ root: classes.containerRoot }}>
                    <Grid
                        container
                        classes={{ root: classes.gridContainerRoot }}
                    >
                        {user.isLogged ? <WellsList /> : <Login />}
                    </Grid>
                </Container>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    // well: state.well,
    user: state.user,
    loader: state.loader,
});

const mapDispatchToProps = dispatch => ({
    findSession: () => dispatch(getSession()),
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withStyles(styles)
)(Main);
