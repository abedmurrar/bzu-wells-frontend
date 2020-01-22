import React from 'react';
import { connect } from 'react-redux';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { logout } from '../store/actions/user.actions';
import About from './About';
import UserMenu from './UserMenu';

const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1,
    },
}));

const Header = props => {
    const classes = useStyles();
    const {
        user: {
            isLogged: isAuthenticated,
            profile: { first_name, last_name },
        },
        _logout,
    } = props;
    return (
        <AppBar position="relative">
            <Toolbar variant="dense">
                <Typography variant="h6" className={classes.title}>
                    Engineering Office
                </Typography>
                <About />
                {isAuthenticated && (
                    <UserMenu
                        userFullName={`${first_name} ${last_name}`}
                        _logout={_logout}
                    />
                )}
            </Toolbar>
        </AppBar>
    );
};

const mapDispatchToProps = dispatch => ({
    _logout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(Header);
