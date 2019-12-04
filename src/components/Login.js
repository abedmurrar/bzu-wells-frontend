import React, { Component } from 'react';
import {
    Button,
    Grid,
    TextField,
    withStyles,
    Card,
    CardContent,
    CardActions,
} from '@material-ui/core';

const styles = theme => ({
    root: {
        [theme.breakpoints.down('xs')]: {
            width: '90%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '80%',
        },
    },
});

class Login extends Component {
    constructor(props) {
        super(props);
        /** Initializing State */
        this.state = {
            username: '',
            password: '',
        };
        /** Binding fucntion */
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const {
            target: { name, value },
        } = event;
        this.setState({
            [name]: value,
        });
    }

    render() {
        const {
            classes,
            usernameHelperText = '',
            passwordHelperText = '',
        } = this.props;

        return (
            <Grid classes={{ root: classes.root }}>
                <Card>
                    <CardContent>
                        <TextField
                            // id="filled-full-width"
                            label="Username"
                            style={{ margin: 8 }}
                            // placeholder=""
                            helperText={usernameHelperText}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleInputChange}
                        />
                        <TextField
                            // id="filled-full-width"
                            label="Password"
                            type="password"
                            style={{ margin: 8 }}
                            // placeholder=""
                            helperText={passwordHelperText}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleInputChange}
                        />
                    </CardContent>
                    <CardActions>
                        <Button>Login</Button>
                    </CardActions>
                </Card>
            </Grid>
        );
    }
}

export default withStyles(styles)(Login);
