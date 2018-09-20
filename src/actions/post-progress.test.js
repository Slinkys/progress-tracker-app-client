import {POST_PROGRESS, postProgress, POST_PROGRESS_SUCCESS, postProgressSuccess, POST_PROGRESS_ERROR, postProgressError} from './post-progress';

describe('postProgress', () => { 
  it('Should return the action', () => {
    const action = postProgress();
    expect(action.type).toEqual(POST_PROGRESS);
  });
});

describe('postProgressSuccess', () => { 
  it('Should return the action', () => {
    const dailyProgress = [];
    const action = postProgressSuccess(dailyProgress);
    expect(action.type).toEqual(POST_PROGRESS_SUCCESS);
  });
});

describe('postProgressError', () => { 
  it('Should return the action', () => {
    const error = 'error';
    const action = postProgressError(error);
    expect(action.type).toEqual(POST_PROGRESS_ERROR);
  });
});