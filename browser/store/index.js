import { createStore, applyMiddleware, combineReducers } from 'redux';
import studentReducer from './students';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

// MASTER REDUCER
const reducer = combineReducers({
  students: studentReducer
});

// STORE
const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

export default store;
