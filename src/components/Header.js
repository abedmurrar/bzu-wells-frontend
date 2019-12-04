import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1,
    },
}));

export default function Header(props) {
    const classes = useStyles();
    const { isAuthenticated } = props;
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" className={classes.title}>
                        Engineering Office
                    </Typography>
                    {isAuthenticated && <Button color="inherit">Logout</Button>}
                </Toolbar>
            </AppBar>
        </div>
    );
}
