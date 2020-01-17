import React from 'react';
import { CircularProgress, withStyles } from '@material-ui/core';

const styles = theme => ({
    loadingRoot: {
        position: 'fixed',
        zIndex: 123124135,
    },
});
const Loading = ({ isLoading, classes }) => (
    <div className={classes.loadingRoot}>
        <CircularProgress
            style={{
                transition: 'width 500ms, height 500ms',
                height: isLoading ? '10%' : '0',
                width: isLoading ? '10%' : '0',
            }}
            color="primary"
            size={50}
        />
    </div>
);

export default withStyles(styles)(Loading);
