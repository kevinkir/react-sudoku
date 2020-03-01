import { combineReducers } from 'redux';

import { gridReducer } from './grid';

export const rootReducer = combineReducers({
  grid: gridReducer,
});
