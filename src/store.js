import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import {loadAuthToken} from './local-storage';
import authReducer from './reducers/auth';
import protectedDataReducer from './reducers/protected-data';
import postGoalReducer from './reducers/post-goal';
import postProgressReducer from './reducers/post-progress';
import {setAuthToken, refreshAuthToken} from './actions/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authReducer,
        protectedData: protectedDataReducer,
        postGoal: postGoalReducer,
        postProgress: postProgressReducer  
    }),
    composeEnhancers(applyMiddleware(thunk))
);


// With the JWT stored, all that remains for persistence to work is 
// to reload the token when the application loads. We do this in src/store.js:
// Hydrate the authToken from localStorage if it exists:
const authToken = loadAuthToken(); //loadAuthToken func defined in local-storage.js
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;



