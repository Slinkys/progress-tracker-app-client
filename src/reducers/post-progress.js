import {
  POST_PROGRESS,
  POST_PROGRESS_SUCCESS,
  POST_PROGRESS_ERROR
} from '../actions/post-progress';

const initialState = {
  progress: 100,
  dailyProgress: [],
  error: null
};

export default function reducer(state=initialState, action) {
  console.log(state, action);
  if(action.type === POST_PROGRESS) {
    return Object.assign({}, state, {
      progress: action.progress,
      progressSaved: false 
    }); 
  } else if (action.type === POST_PROGRESS_SUCCESS) {
    return Object.assign({}, state, {
      progress: action.progress,
      progressSaved: true,
      dailyProgress: [...state.dailyProgress, action.progress]
    });
  } else if (action.type === POST_PROGRESS_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      progressSaved: false
    });
  }
  return state; 
};