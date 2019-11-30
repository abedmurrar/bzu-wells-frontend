import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid } from '@material-ui/core';
import { Header } from '../components';

class Main extends Component {
    render() {
        // const {}
        return (
            <Container>
                <Header />
                <Grid></Grid>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    well: state.well,
    user: state.user,
    wells: state.wells,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
