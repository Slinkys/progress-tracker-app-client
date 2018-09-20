import {DISPLAY_GOAL, displayGoal, DISPLAY_GOAL_SUCCESS, displayGoalSuccess, DISPLAY_GOAL_ERROR, displayGoalError} from './display-goal';

describe('displayGoal', () => { 
  it('Should return the action', () => {
    const action = displayGoal();
    expect(action.type).toEqual(DISPLAY_GOAL);
  });
});

describe('displayGoalSuccess', () => { 
  it('Should return the action', () => {
    const goal = 'goal'; //a number? **
    const action = displayGoalSuccess(goal);
    expect(action.type).toEqual(DISPLAY_GOAL_SUCCESS);
  });
});

describe('displayGoalError', () => { 
  it('Should return the action', () => {
    const error = 'error';
    const action = displayGoalError(error);
    expect(action.type).toEqual(DISPLAY_GOAL_ERROR);
  });
});

