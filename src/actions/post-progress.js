import {authSuccess} from './auth';
import {API_BASE_URL} from '../config';

export const POST_PROGRESS = 'POST_PROGRESS';
export const postProgress = () => ({
	type: POST_PROGRESS
});

export const POST_PROGRESS_SUCCESS = 'POST_PROGRESS_SUCCESS';
export const postProgressSuccess = dailyProgress => ({
	type: POST_PROGRESS_SUCCESS,
	dailyProgress
});

export const POST_PROGRESS_ERROR = 'POST_PROGRESS_ERROR';
export const postProgressError = error => ({
	type: POST_PROGRESS_ERROR,
	error
});

// const BASE_URL = 'http://localhost:8080';


export const postDailyProgress = (dailyProgress, userId) => (dispatch) => {
  return fetch(`${API_BASE_URL}/users/${userId}`,
  {
    method: 'put',
    headers: {
        'Content-Type': 'application/json'
    },  
    body: JSON.stringify(dailyProgress)
  }) 
    .then(res => res.json())
    .then((user) => { 
    dispatch(postProgressSuccess(dailyProgress))
    return dispatch(authSuccess(user))
    }) 
		.catch(err => {
      dispatch(postProgressError(err));
		});
};