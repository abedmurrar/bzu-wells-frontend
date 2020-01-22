import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Typography, Paper, Grid, withStyles } from '@material-ui/core';
import { Well } from '.';
import { getWells } from '../store/actions';

const TWENTY_MINUTES_INTERVAL = 1000 /*ms*/ * 60 /* seconds */ * 20; /*minutes*/

const styles = theme => ({
    paperRoot: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '30px',
    },
});

class WellsList extends React.Component {
    componentDidMount() {
        /**
         * load all wells immediately when
         * component is loaded, and start an
         * interval to load wells every twenty
         * minutes, because every twenty minutes
         * there will be a new reading for every well
         */
        const { loadWells } = this.props;
        loadWells();
        this.timer = setInterval(() => loadWells(), TWENTY_MINUTES_INTERVAL);
    }

    componentWillUnmount() {
        this.timer && clearInterval(this.timer);
    }

    render() {
        const {
            wells: { list: wellsArray },
            classes,
        } = this.props;

        return wellsArray && wellsArray.length < 0 ? (
            <Typography variant="h2">No wells</Typography>
        ) : (
            <Grid item xs={12}>
                <Paper classes={{ root: classes.paperRoot }}>
                    {wellsArray.map(well => (
                        <Well key={well.id} well={well} />
                    ))}
                </Paper>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    wells: state.wells,
});

const mapDispatchToProps = dispatch => ({
    loadWells: () => dispatch(getWells()),
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withStyles(styles)
)(WellsList);
