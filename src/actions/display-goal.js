import {API_BASE_URL} from '../config';

export const DISPLAY_GOAL = 'DISPLAY_GOAL';
export const displayGoal = () => ({
	type: DISPLAY_GOAL
});

export const DISPLAY_GOAL_SUCCESS = 'DISPLAY_GOAL_SUCCESS';
export const displayGoalSuccess = goal => ({
	type: DISPLAY_GOAL_SUCCESS,
	goal
});

export const DISPLAY_GOAL_ERROR = 'DISPLAY_GOAL_ERROR';
export const displayGoalError = error => ({
	type: DISPLAY_GOAL_ERROR,
	error
});


export const displayUserGoal = (goal, userId) => (dispatch) => {
  return fetch(`${API_BASE_URL}/api/users/${userId}`, 
  {
    method: 'get',
    headers: {
        'Content-Type': 'application/json'
    },  
    body: JSON.stringify(goal)
  }) 

		.then(res => res.json())
		.then((goal) => dispatch(displayGoalSuccess(goal)))
		.catch(err => {
			dispatch(displayGoalError(err));
		});
};