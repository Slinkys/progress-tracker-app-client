import {FETCH_GOAL, fetchGoal, FETCH_GOAL_SUCCESS, fetchGoalSuccess, FETCH_GOAL_ERROR, fetchGoalError} from './fetch-user-goal';

describe('fetchGoal', () => { 
  it('Should return the action', () => {
    const action = fetchGoal();
    expect(action.type).toEqual(FETCH_GOAL);
  });
});

describe('fetchGoalSuccess', () => { 
  it('Should return the action', () => {
    const goal = 'goal';
    const action = fetchGoalSuccess(goal);
    expect(action.type).toEqual(FETCH_GOAL_SUCCESS);
  });
});

describe('fetchGoalError', () => { 
  it('Should return the action', () => {
    const error = 'error';
    const action = fetchGoalError(error);
    expect(action.type).toEqual(FETCH_GOAL_ERROR);
  });
});