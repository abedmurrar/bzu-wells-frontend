import React from 'react';
import { Menu, MenuItem, IconButton } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default function UserMenu(props) {
    const { userFullName = 'Account', _logout } = props;

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                aria-controls="user-menu"
                aria-haspopup="true"
                onClick={handleClick}
                color="inherit"
                aria-label="drop menu"
            >
                <ArrowDropDownIcon />
            </IconButton>
            <Menu
                id="user-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem disabled>{userFullName}</MenuItem>
                <MenuItem onClick={handleClose}>Change Password</MenuItem>
                <MenuItem onClick={_logout}>Logout</MenuItem>
            </Menu>
        </div>
    );
}
