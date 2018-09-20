import reducer from './post-goal';
import {postGoal, postGoalSuccess, postGoalError} from '../actions/post-goal';

describe('reducer', () => {

  it('Should set the initial state when nothing is passed in', () => {
    const state = reducer(undefined, {type: '@@UNKNOWN'});
    expect(state).toEqual({
      goal: '',
      error: null
    });
  });
  
  it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = reducer(currentState, {type: '@@UNKNOWN'});
    expect(state).toBe(currentState);
  });

  describe('postGoal', () => {
    it('Should handle the post goal action', () => {
      let state;
      let goal;
      state = reducer(state, postGoal());
      expect(state).toEqual({
        goal,
        goalSaved: false,
        error: null
      });
    });
  });

  describe('postGoalSuccess', () => {
    it('Should handle the post goal success action', () => {
      let state;
      let goal;
      state = reducer(state, postGoalSuccess());
      expect(state).toEqual({
        goal,
        goalSaved: true,
        error: null
      });
    });
  });

  describe('postGoalError', () => {
    it('Should handle the post goal error action', () => {
      let state;
      let error;
      let goal;
      state = reducer(state, postGoalError());
      expect(state).toEqual({
        goalSaved: false,
        goal: '',
        error
      });
    });
  });

})