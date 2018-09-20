import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import '../App.css';

import HeaderBar from './header-bar';
import LandingPage from './landing-page';
import Dashboard from './dashboard';
import RegistrationPage from './registration-page';
import {refreshAuthToken, clearAuth} from '../actions/auth';
import {DisplayGoal} from './display-goal';
import {clearAuthToken} from '../local-storage.js';
import SetupPage from './setup-page';  


export class App extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.loggedIn && this.props.loggedIn) {
            this.startPeriodicRefresh();
        } else if (prevProps.loggedIn && !this.props.loggedIn) {
            this.stopPeriodicRefresh();
        }
    }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
        this.props.dispatch(clearAuth());
    }

    componentWillMount() {
        this.onRefresh();
    }

    onRefresh() {
        window.onbeforeunload = (e) => {
            this.props.dispatch(clearAuth());
            clearAuthToken();
        }
    }

    startPeriodicRefresh() {
        this.refreshInterval = setInterval(
            () => this.props.dispatch(refreshAuthToken()),
            600000
        );
    }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

    render() {
        return (
            <div className="app">
              <HeaderBar />
              <Route exact path="/" component={LandingPage}/>
              <Route exact path="/register" component={RegistrationPage} />
              <Route exact path="/dashboard" component={Dashboard}/>
              <Route exact path="/display-goal" component={DisplayGoal}/>
              <Route exact path="/setup-page" component={SetupPage}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    hasAuthToken: state.auth.authToken !== null,
    loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));