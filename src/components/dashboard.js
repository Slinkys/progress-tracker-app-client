import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import {postDailyProgress} from '../actions/post-progress';
import SetupPage from './setup-page';
import {DisplayGoal} from './display-goal';
import './dashboard.css'; 

export class Dashboard extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
            warningTime: 1000 * 5,
            mainTime: 600000,
        };
    }

    setTimeOut() {
        this.warnTimeout = setTimeout(this.warn, this.state.warningTime);
        this.logoutTimeout = setTimeout(this.logout, this.state.mainTime);
    }
    
    clearTimeoutFunc = () => {
        if (this.warnTimeout) {
            clearTimeout(this.warnTimeout)
        }
        if (this.logoutTimeout) {
            clearTimeout(this.logoutTimeout)
        }
    };
    
    resetTimeout = () => {
        this.clearTimeoutFunc();
        this.setTimeout();
    };

    warn(){
        window.alert("You will be logged out automatically in 1 minute")
        console.log('You will be logged out automatically in 1 minute.');
    };

    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
        this.signOutTime = setTimeout(() => {
            this.props.dispatch(clearAuth());
            clearAuthToken();
        }, this.state.mainTime);
    }
    componentWillUnmount = () => {
        clearTimeout(this.state.mainTime);
    }

    onSubmit(e) {
      e.preventDefault();
      this.props.dispatch(postDailyProgress({    
        dailyProgress: this.state.dailyProgress, 
      }, 
      this.props.userId 
      ));
      this.input.value = '';
      this.input.focus();
    }

    setProgress(progress) {
        this.setState({
            dailyProgress: progress
        })
    }
    
    render() {
        if (!this.props.goalSaved) {
            return <SetupPage /> 
        }    

        return (
            <main className="dashboard">
                <form 
                    className="progress-form"
                    onSubmit={e => this.onSubmit(e)} 
                    ref={input => (this.input = input)}>    

                    <div className="enter-progress">
                    <h3>Number of words you wrote today: </h3> 
                        <input name="daily-progress" type="text" id="progress-input" 
                        onChange={e => this.setProgress(e.target.value)} 
                        ref={input => (this.input = input)} 
                        />
                    </div>
                    <button type="submit">Submit</button> 
                    <DisplayGoal currentUser={this.props.currentUser}/>
                </form> 
          </main>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        currentUser,
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        userId: currentUser.userId,
        protectedData: state.protectedData.data,
        goalSaved: state.auth.currentUser.dailyGoal !== 0 
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));