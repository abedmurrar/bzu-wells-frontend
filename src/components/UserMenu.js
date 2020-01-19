import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function UserMenu(props) {
    const { buttonText = 'Account', _logout } = props;

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                aria-controls="user-menu"
                aria-haspopup="true"
                onClick={handleClick}
                color="inherit"
            >
                {buttonText}
            </Button>
            <Menu
                id="user-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Change Password</MenuItem>
                <MenuItem onClick={_logout}>Logout</MenuItem>
            </Menu>
        </div>
    );
}
