import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import LoginForm from './login-form';
import InfoSection from './info-section';


export function LandingPage(props) {

    if (props.loggedIn) { 
        return <Redirect to="/dashboard" />;
    }

    if (props.loggedIn && props.currentUser) {
        console.log(props.currentUser.dailyGoal, props.currentUser.totalDays)
        if (props.currentUser.dailyGoal && props.currentUser.totalDays) { 
            return <Redirect to="/dashboard"/>
        } 
        return <Redirect to="/setup-page" />;    
    }

    return (
        <div className="home">
            <h2>Welcome to Progress Tracker!</h2>
            <LoginForm />
            <Link to="/register">Sign up</Link>
            <InfoSection />
        </div>
    );
}

const mapStateToProps = state => ({
    currentUser: state.auth.currentUser,
    loggedIn: state.auth.currentUser !== null,
});

export default connect(mapStateToProps)(LandingPage);