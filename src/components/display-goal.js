import React from 'react';
import {connect} from 'react-redux';
import {postDailyProgress} from '../actions/post-progress';
import './display-goal.css';

export class DisplayGoal extends React.Component {

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

  calcProgress = dailyProgress => dailyProgress.reduce((a, b) => a + b, 0);

  calcDays = (totalDays, dailyProgress) => totalDays - dailyProgress.length;

  calcNewGoal = (totalDays, dailyGoal, calcProgress) => {
    let totalGoal = totalDays * dailyGoal;
    return totalGoal - calcProgress;
  }

  calcNewDailyGoal = (totalDays, dailyProgress, dailyGoal, calcProgress) => {
    let daysLeft = totalDays - dailyProgress.length;
    let totalGoal = dailyGoal * totalDays;
    let newTotalGoal = totalGoal - calcProgress;
    return Math.round(newTotalGoal / daysLeft)
  }

  render() {
    return(
      <main class="display-progress">
        <div className="display-goal">
          <ul> 
            <li>Total goal: </li>
              <li1>{this.props.currentUser.dailyGoal * this.props.currentUser.totalDays} words in {this.props.currentUser.totalDays} days</li1> 
            <li>Daily goal:  </li>
              <li1>{this.props.currentUser.dailyGoal} words per day</li1> 
            <li>Total progress: </li>
              <li1>{this.calcProgress(this.props.currentUser.dailyProgress)} words in {this.props.currentUser.dailyProgress.length} day(s)</li1>
            <li>Days left: </li>
              <li1>{this.calcDays(this.props.currentUser.totalDays, this.props.currentUser.dailyProgress)} </li1>
            <li>New total goal: </li>
              <li1>{this.calcNewGoal(this.props.currentUser.totalDays, this.props.currentUser.dailyGoal, 
                this.calcProgress(this.props.currentUser.dailyProgress))} words in {this.calcDays(this.props.currentUser.totalDays, this.props.currentUser.dailyProgress)} day(s)</li1>
            <li>New daily goal: </li>
              <li1>{this.calcNewDailyGoal(this.props.currentUser.totalDays, this.props.currentUser.dailyProgress, this.props.currentUser.dailyGoal, 
                this.calcProgress(this.props.currentUser.dailyProgress))} words per day</li1>
          </ul>
        </div>
      </main>
    );
  }
} 

const mapStateToProps = state => {
  // console.log(state);
    return {
      protectedData: state.protectedData.data,
      goalSaved: state.auth.currentUser.dailyGoal !== 0,
      dailyGoal: state.auth.currentUser.dailyGoal,
      totalDays: state.auth.currentUser.totalDays,
      dailyProgress: state.auth.currentUser.dailyProgress 
  };
};

export default connect(mapStateToProps)(DisplayGoal);

