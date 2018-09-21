import reducer from './post-progress';

describe('reducer', () => {

  it('Should set the initial state when nothing is passed in', () => {
    const state = undefined;
    const action = {
      type: '@@UNKNOWN'
    };
    const newState = reducer(state, action);
    expect(newState).toEqual({ 
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

})