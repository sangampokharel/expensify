import { combineReducers } from 'redux';
import { expenseReducer } from './expenseReducer';
import { filterReducer } from './filterReducer';
export const rootReducer = combineReducers({
  expense: expenseReducer,
  filter: filterReducer
});
