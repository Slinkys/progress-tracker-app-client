import {FETCH_PROTECTED_DATA_SUCCESS, fetchProtectedDataSuccess, FETCH_PROTECTED_DATA_ERROR, fetchProtectedDataError} from './protected-data';

describe('fetchProtectedDataSuccess', () => { 
  it('Should return the action', () => {
    const data = 'data';
    const action = fetchProtectedDataSuccess(data);
    expect(action.type).toEqual(FETCH_PROTECTED_DATA_SUCCESS);
  });
});

describe('fetchProtectedDataError', () => { 
  it('Should return the action', () => {
    const error = 'error';
    const action = fetchProtectedDataError(error);
    expect(action.type).toEqual(FETCH_PROTECTED_DATA_ERROR);
  });
});