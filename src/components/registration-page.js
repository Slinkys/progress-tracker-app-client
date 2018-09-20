import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';

import RegistrationForm from './registration-form';

export function RegistrationPage(props) {
    if (props.loggedIn) { 
        return <Redirect to="/dashboard" />;
    }
    return (
        <div className="home">
            <h2>Sign up to use Progress Tracker for free!</h2>
            <RegistrationForm />
            <Link to="/">Login</Link> 
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);