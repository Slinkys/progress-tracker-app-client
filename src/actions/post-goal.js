import {authSuccess} from './auth';
import {API_BASE_URL} from '../config';

export const POST_GOAL = 'POST_GOAL';
export const postGoal = () => ({
	type: POST_GOAL
});

export const POST_GOAL_SUCCESS = 'POST_GOAL_SUCCESS';
export const postGoalSuccess = goal => ({
	type: POST_GOAL_SUCCESS,
	goal
});

export const POST_GOAL_ERROR = 'POST_GOAL_ERROR';
export const postGoalError = error => ({
	type: POST_GOAL_ERROR,
	error
});


export const postUserGoal = (goal, userId) => (dispatch) => {  
  return fetch(`${API_BASE_URL}/users/${userId}`, 
  {
    method: 'put',
    headers: {
        'Content-Type': 'application/json'
    },  
    body: JSON.stringify(goal)
  }) 
    .then(res => res.json())
		.then((user) => {
      dispatch(postGoalSuccess(user))
      return dispatch(authSuccess(user))
    })
		.catch(err => {
			dispatch(postGoalError(err));
		});
};