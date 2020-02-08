import React, { Fragment } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { Login, WellsList } from './components';

const Root = ({ user }) => {
    return (
        <Router>
            <Switch>
                {!user.isLogged ? (
                    <Fragment>
                        <Route path="/login" component={Login} />
                        <Redirect to="/login" />
                    </Fragment>
                ) : (
                    <Fragment>
                        <Route path="/" exact component={WellsList} />
                        <Redirect to="/" />
                    </Fragment>
                )}
                {user.profile && user.profile.role === 'admin' && (
                    <Fragment>
                        {/* <Route path="/admin" component={AdminDashboard} /> */}
                    </Fragment>
                )}
            </Switch>
        </Router>
    );
};
const mapStateToProps = state => ({
    user: state.user,
});
export default connect(mapStateToProps)(Root);
