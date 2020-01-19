import React from 'react';
import { CircularProgress, Backdrop } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
    },
}));
const Loading = ({ isLoading }) => {
    const classes = useStyles();

    return (
        <Backdrop className={classes.backdrop} open={isLoading}>
            <CircularProgress color="primary" size={100} />
        </Backdrop>
    );
};

export default Loading;
