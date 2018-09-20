import reducer from './post-progress';
import {postProgress, postProgressSuccess, postProgressError} from '../actions/post-progress';

describe('reducer', () => {

  it('Should set the initial state when nothing is passed in', () => {
    const state = undefined;
    const action = {
      type: '@@UNKNOWN'
    };
    const newState = reducer(state, action);
    expect(newState).toEqual({ //should look like initial state
      progress: 100,
      dailyProgress: [],
      error: null
    });
  });

  it('Should return the current state on an unknown action', () => {
    const state = {
      progress: 100,
      dailyProgress: [100, 90, 80],
      error: null,
      progressSaved: false
    };
    const action = {
      type: '@@UNKNOWN'
    };

    const newState = reducer(state, action);
    expect(newState).toEqual(state);
  });
  
  // it('Should return the current state on an unknown action', () => {
  //   let currentState = {};
  //   const state = reducer(currentState, {type: '@@UNKNOWN'});
  //   expect(state).toBe(currentState);
  // });

  // describe('postProgress', () => {
  //   it('Should handle the post progress action', () => {
  //     const state = {
  //       progress: 100,
  //       dailyProgress: [100, 90, 80],
  //       error: null,
  //       progressSaved: false
  //     };
  //     const action = postProgress(100); //do I need this here?  
  //     const newState = reducer(state, action);
  //     expect(newState).toEqual({
  //       progress: state.progress,
  //       dailyProgress: state.dailyProgress,
  //       progressSaved: false,
  //       error: null
  //     });
  //   });
  // });

  // describe('postProgressSuccess', () => {
  //   it('Should handle the post progress success action', () => {
  //     const state = {
  //       progress: action.progress,
  //       dailyProgress: [...state.dailyProgress, action.progress],
  //       error: null,
  //       progressSaved: true
  //     };
  //     const action = postProgressSuccess(100);  
  //     const newState = reducer(state, action);
  //     expect(newState).toEqual({
  //       progress,
  //       dailyProgress,
  //       progressSaved: true,
  //       error: null
  //     });
  //   });
  // });

  // describe('postGoalSuccess', () => {
  //   it('Should handle the post goal success action', () => {
  //     let state;
  //     let goal;
  //     state = reducer(state, postGoalSuccess());
  //     expect(state).toEqual({
  //       goal,
  //       goalSaved: true,
  //       error: null
  //     });
  //   });
  // });

  // describe('postGoalError', () => {
  //   it('Should handle the post goal error action', () => {
  //     let state;
  //     let error;
  //     let goal;
  //     state = reducer(state, postGoalError());
  //     expect(state).toEqual({
  //       goalSaved: false,
  //       goal: '',
  //       error
  //     });
  //   });
  // });

})