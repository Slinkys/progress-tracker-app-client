import {
  POST_GOAL,
  POST_GOAL_SUCCESS,
  POST_GOAL_ERROR
} from '../actions/post-goal';

const initialState = {
  goal: '',
  error: null
};

export default function reducer(state=initialState, action) {
  if(action.type === POST_GOAL) {
    return Object.assign({}, state, {
      goal: action.goal,
      goalSaved: false 
    }); 
  } else if (action.type === POST_GOAL_SUCCESS) {
    console.log(action)
    return Object.assign({}, state, {
      goal: action.goal,
      goalSaved: true
    });
  } else if (action.type === POST_GOAL_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      goalSaved: false
    });
  }
  return state; 
};


