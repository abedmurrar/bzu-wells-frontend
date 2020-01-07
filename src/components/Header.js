import React from 'react';
import { connect } from 'react-redux';
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { logout } from '../store/actions/user.actions';

const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1,
    },
}));

const Header = props => {
    const classes = useStyles();
    const { isAuthenticated, _logout } = props;
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" className={classes.title}>
                        Engineering Office
                    </Typography>
                    {isAuthenticated && (
                        <Button onClick={_logout} color="inherit">
                            Logout
                        </Button>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    _logout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(Header);
