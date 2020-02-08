import React from 'react';
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
        marginTop: '30px',
        marginBottom: '30px',
        [theme.breakpoints.up('xl')]: {
            width: '50%',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            width: '40%',
        },
    },
}));
const Well = props => {
    const {
        well: { id, name, volume, readings },
    } = props;
    const classes = useStyles();
    let day = 86400000;
    return (
        <Grid item xs={12} classes={{ root: classes.rootGrid }}>
            <Card>
                <CardHeader
                    title={
                        <Typography variant="h4">
                            {id} {name}
                        </Typography>
                    }
                />
                <Divider />
                <CardContent>
                    {readings.length !== 0 ? (
                        <div>
                            {Date.now() - day >
                            Date.parse(
                                readings[readings.length - 1].created_at
                            ) ? (
                                <Alert severity="warning" variant="filled">
                                    HAS NOT RECORDED A READING FOR MORE THAN ONE
                                    DAY.
                                    <br />
                                    PLEASE CHECK NODE {id}!
                                </Alert>
                            ) : (
                                <Alert severity="info" variant="filled">
                                    {name} is now{' '}
                                    {Math.round(
                                        (readings[readings.length - 1].volume *
                                            100) /
                                            volume
                                    )}
                                    %
                                </Alert>
                            )}
                            <WellGraph readings={readings} />
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
