import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
    //on form submit, dispatch registerUser async action and then login action
    //this automatically logs in the user once they successfully register
    onSubmit(values) {
        //pick out the values using object destructuring and assign to variables
        //not necessary, but helps organize the code
        const {username, password, firstName, lastName} = values;
        const user = {username, password, firstName, lastName};
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    render() {
        return (
            <form
                className="login-form"
                //On form submit, this.props.handleSubmit runs 
                //it's a prop given to componenet that connects 
                //using Redux Form (lines 66-70) 
                //it handles submission and gives the values
                onSubmit={this.props.handleSubmit(values =>
                    //after this prop (handleSubmit) is executed, run our onSubmit
                    //and pass the values given to us by the Redux Form
                    //these values are all the Field values (lines 36, 38, etc)
                    //and values passed to onSubmit func (line 13)
                    this.onSubmit(values)
                )}>
                <label htmlFor="firstName">First name</label>
                <Field component={Input} type="text" name="firstName" />
                <label htmlFor="lastName">Last name</label>
                <Field component={Input} type="text" name="lastName" />
                <label htmlFor="username">Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <label htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    validate={[required, passwordLength, isTrimmed]}
                />
                <label htmlFor="passwordConfirm">Confirm password</label>
                <Field
                    component={Input}
                    type="password"
                    name="passwordConfirm"
                    validate={[required, nonEmpty, matchesPassword]}
                />
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Sign up
                </button>
            </form>
        );
    }
}

//React Redux's connect method: https://courses.thinkful.com/react-001v3/assignment/3.6
export default reduxForm({ //use Redux Form connection and export the component
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>  //these errors come from users.js Redux Form: Submission Error
        dispatch(focus('registration', Object.keys(errors)[0])) 
})(RegistrationForm);

// can dispatch your own actions and then in the comp this.props.error.something (custom make errors) 
// can dispatch your own action and pass it the error and put it into the state 
// dispatch(error(err))
// pass the error to state 
// and then get it into the component with mapStateToProps