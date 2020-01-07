import React, { Component } from 'react';
import {
    Button,
    Grid,
    TextField,
    withStyles,
    Card,
    CardContent,
    CardActions,
    CardHeader,
    Typography,
} from '@material-ui/core';
import { login } from '../store/actions/user.actions';
import { connect } from 'react-redux';
import { compose } from 'redux';

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
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const {
            target: { name, value },
        } = event;
        this.setState({
            [name]: value,
        });
    }

    handleSubmit() {
        this.props._login(this.state.username, this.state.password);
    }

    render() {
        const {
            classes,
            usernameHelperText = '',
            passwordHelperText = '',
        } = this.props;

        return (
            <Grid item xs={11} sm={10} md={6}>
                <Card style={{ padding: '10px' }}>
                    <CardHeader
                        title={<Typography variant="h2">Login</Typography>}
                    />
                    <CardContent>
                        <TextField
                            // id="filled-full-width"
                            name="username"
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
                            name="password"
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
                        <Button onClick={this.handleSubmit}>Login</Button>
                    </CardActions>
                </Card>
            </Grid>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        _login: (username, password) => {
            dispatch(login(username, password));
        },
    };
};

export default compose(
    connect(null, mapDispatchToProps),
    withStyles(styles)
)(Login);
