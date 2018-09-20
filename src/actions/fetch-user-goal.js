export const FETCH_GOAL = 'FETCH_GOAL';
export const fetchGoal = () => ({
	type: FETCH_GOAL
});

export const FETCH_GOAL_SUCCESS = 'FETCH_GOAL_SUCCESS';
export const fetchGoalSuccess = goal => ({
	type: FETCH_GOAL_SUCCESS,
	goal
});

export const FETCH_GOAL_ERROR = 'FETCH_GOAL_ERROR';
export const fetchGoalError = error => ({
	type: FETCH_GOAL_ERROR,
	error
});
const BASE_URL = 'http://localhost:8080';

export const fetchUserGoal = () => (dispatch) => {
	console.log('fetching goal')
	
	return fetch(`${BASE_URL}/api/dashboard`) //${usersId} ?
		.then(res => res.json())
		.then((goal) => dispatch(fetchGoalSuccess(goal)))
		.catch(err => {
			dispatch(fetchGoalError(err));
		});
};
