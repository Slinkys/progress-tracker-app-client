import reducer from './auth';
import {setAuthToken, clearAuth, authRequest, authSuccess, authError} from '../actions/auth';

describe('reducer', () => {

  it('Should set the initial state when nothing is passed in', () => {
    const state = reducer(undefined, {type: '@@UNKNOWN'});
    expect(state).toEqual({
      authToken: null, 
      currentUser: null,
      loading: false,
      error: null
    });
  });
  
  it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = reducer(currentState, {type: '@@UNKNOWN'});
    expect(state).toBe(currentState);
  });

  describe('setAuthToken', () => {
    it('Should handle the set auth token action', () => {
      let state;
      let authToken;
      state = reducer(state, setAuthToken());
      expect(state).toEqual({
        authToken, 
        currentUser: null, 
        loading: false,
        error: null
      });
    });
  });

  describe('clearAuth', () => {
    it('Should handle the clear auth token action', () => {
      let state;
      let authToken;
      let currentUser;
      state = reducer(state, clearAuth(authToken, currentUser));
      expect(state).toEqual({
        authToken: null,
        currentUser: null,
        loading: false,
        error: null
      });
    });
  });

  describe('authRequest', () => {
    it('Should handle the request auth token action', () => {
      let state;
      let authToken;
      let currentUser;
      state = reducer(state, authRequest(authToken, currentUser));
      expect(state).toEqual({
        authToken: null,
        currentUser: null,
        loading: true,
        error: null
      });
    });
  });

  describe('authSuccess', () => {
    it('Should handle the auth success action', () => {
      let state;
      let authToken;
      let currentUser;
      state = reducer(state, authSuccess(authToken, currentUser));
      expect(state).toEqual({
        authToken: null,
        currentUser,
        loading: false,
        error: null
      });
    });
  });

  describe('authError', () => {
    it('Should handle the auth error action', () => {
      let state;
      let authToken;
      let currentUser;
      let error;
      state = reducer(state, authError(authToken, currentUser));
      expect(state).toEqual({
        authToken: null,
        currentUser: null,
        loading: false,
        error,
      });
    });
  });

})