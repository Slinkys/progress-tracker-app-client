import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form'
import Input from './input';
import {postUserGoal} from '../actions/post-goal'; 
import './setup-page.css';

export class SetupPage extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
            dailyGoal: '',
            totalDays: '',
            goalSaved: false
        };
    }

    onSubmit(e) {
      e.preventDefault()
        this.props.dispatch(postUserGoal({
        dailyGoal: this.state.dailyGoal, 
        totalDays: this.state.totalDays
      }, 
      this.props.userId 
      )); 
      this.input.value = '';
      this.input.focus();
    }

    setDays(days) {
        this.setState({
            totalDays: days
        })
    }

    setGoals(goals) {
        this.setState({
            dailyGoal: goals
        })
    }
    
    render() {
        
        return (
        //   <main className="setup-page">
            <form 
              className="setup-form"
              onSubmit={e => this.onSubmit(e)} 
              ref={input => (this.input = input)}> 
                    {/* <div className="daily-goal"> */}
                    {/* <label htmlFor="daily-goal">Daily goal: </label> */}
                    <Field
                        component={Input}
                        label="Daily goal: " 
                        name="daily-goal" 
                        type="text" 
                        id="goal-input" 
                        value={this.state.dailyGoal}
                        onChange={e => this.setGoals(e.target.value)}/> 
                    {/* </div> */}
                    {/* <div className="total-days"> */}
                    {/* <label htmlFor="total-days">Days until deadline: </label> */}
                    <Field 
                        component={Input}
                        label="Days until deadline: "
                        name="total-days" 
                        type="text" 
                        id="deadline-input" 
                        value={this.state.totalDays} 
                        onChange={e => this.setDays(e.target.value)}/>
                    {/* </div> */}
                <button disabled={this.props.pristine || this.props.submitting}>
                    Submit
                </button>        
                {/* <button type="submit">Submit</button>  */}
            </form> 
        //   </main>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        userId: currentUser.userId,
    };
};

// export default (connect(mapStateToProps)(SetupPage)); 
export default reduxForm({
    form: 'setup',
    onSubmitFail: (errors) => (console.log('error'))
})(SetupPage);   
