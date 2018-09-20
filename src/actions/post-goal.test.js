import {POST_GOAL, postGoal, POST_GOAL_SUCCESS, postGoalSuccess, POST_GOAL_ERROR, postGoalError} from './post-goal';

describe('postGoal', () => { 
  it('Should return the action', () => {
    const action = postGoal();
    expect(action.type).toEqual(POST_GOAL);
  });
});

describe('postGoalSuccess', () => { 
  it('Should return the action', () => {
    const goal = 'goal';
    const action = postGoalSuccess(goal);
    expect(action.type).toEqual(POST_GOAL_SUCCESS);
  });
});

describe('postGoalError', () => { 
  it('Should return the action', () => {
    const error = 'error';
    const action = postGoalError(error);
    expect(action.type).toEqual(POST_GOAL_ERROR);
  });
});