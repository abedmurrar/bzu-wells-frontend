import React, { Component } from 'react';
import {
    Card,
    Grid,
    CardHeader,
    Typography,
    CardContent,
    Divider,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import WellGraph from './WellGraph';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    rootGrid: {
        [theme.breakpoints.up('xl')]: {
            width: '50%',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            width: '40%',
        },
    },
}));
const Well = props => {
    const { well } = props;
    const classes = useStyles();
    let day = 86400000;
    return (
        <Grid
            item
            xs={12}
            classes={{ root: classes.rootGrid }}
            style={{
                marginTop: '30px',
                marginBottom: '30px',
            }}
        >
            <Card>
                <CardHeader
                    title={
                        <Typography variant="h4">
                            {well.id} {well.name}
                        </Typography>
                    }
                />
                <Divider />
                <CardContent>
                    <Typography
                        variant="caption"
                        style={{ opacity: 0.5 }}
                        color="primary"
                    >
                        Volume = {well.volume} cm<sup>3</sup>
                        <br />
                        Depth = {well.depth} m
                    </Typography>
                    <Divider />
                    {well.readings.length !== 0 ? (
                        <div>
                            {Date.now() - day >
                                Date.parse(
                                    well.readings[well.readings.length - 1]
                                        .created_at
                                ) && (
                                <Alert severity="warning" variant="filled">
                                    HAS NOT RECORDED A READING FOR MORE THAN ONE
                                    DAY.
                                    <br /> PLEASE CHECK NODE {well.id}!
                                </Alert>
                            )}
                            <WellGraph readings={well.readings} />
                        </div>
                    ) : (
                        <Typography variant="body1">
                            No readings yet!
                        </Typography>
                    )}
                </CardContent>
            </Card>
        </Grid>
    );
};
export default Well;
