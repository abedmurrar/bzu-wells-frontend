import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton
                    aria-label="close"
                    className={classes.closeButton}
                    onClick={onClose}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

export default function AboutUsDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button
                // variant="outlined"
                color="inherit"
                onClick={handleClickOpen}
            >
                About
            </Button>
            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    About us
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        This was created as a graduation project with the
                        department of Electrical and Computer Engineering in
                        Birzerit University in 2019/2020.
                    </Typography>
                    <Typography gutterBottom>
                        It was titled as{' '}
                        <ins>
                            <q>
                                Water Level Monitoring Using Wireless Sensor
                                Networks
                            </q>
                        </ins>
                        . This project aims to ease water level monitoring for
                        the Engineering Office in{' '}
                        <abbr title="Birzeit University">BZU</abbr> as they
                        don't have to physically monitor the wells anymore.
                    </Typography>
                    <Typography gutterBottom>
                        That's why this solution was done by{' '}
                        <b>Abed Al Rahman Murrar</b> and <b>Mujahed Odeh</b>.
                    </Typography>
                    <Typography gutterBottom>
                        <b>Mujahed Odeh</b> was a Computer Systems Engineering
                        student, and he handled the hardware part of this
                        project, which are, microcontrollers, sensors, routing
                        algorithm, and RF communication.
                    </Typography>
                    <Typography gutterBottom>
                        <b>Abed Al Rahman Murrar</b> was a Computer Science
                        student, and he handled the software part of this
                        project, which are, creating API, gateway communication
                        with API, database management, and the web application.
                    </Typography>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}
